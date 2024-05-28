# views.py
from django.shortcuts import render
from django.http import JsonResponse
import joblib
import numpy as np
from expenses.ml_models.budget_recommendation import recommend_budget  # Absolute import

# Load trained model
print("Loading ML model from pickle file.")
model = joblib.load("backend/ml_models/expense_classifier.pkl")
print("ML model loaded successfully.")


def categorize_expense(request):
    amount = float(request.GET.get("amount"))
    description_length = len(request.GET.get("description"))

    # Prepare input for prediction
    input_data = np.array([amount, description_length]).reshape(1, -1)
    print(f"Input data for prediction: {input_data}")

    # Predict the category
    category_code = model.predict(input_data)[0]
    print(f"Predicted category code: {category_code}")

    # Map category code to name
    category_mapping = {0: "Groceries", 1: "Transport", 2: "Entertainment"}
    category = category_mapping[category_code]
    print(f"Predicted category name: {category}")

    return JsonResponse({"category": category})


def recommend_budget_view(request):
    user_id = int(request.GET.get("user_id"))
    print(f"Fetching budget recommendations for user ID: {user_id}")

    # Get budget recommendations
    recommendations = recommend_budget(user_id)
    print(f"Budget recommendations: {recommendations}")

    return JsonResponse({"budget_recommendations": recommendations})
