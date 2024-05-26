from django.shortcuts import render
from django.http import JsonResponse
import joblib
import numpy as np
from datetime import datetime
from django.shortcuts import render
from django.http import JsonResponse
from backend.ml_models.budget_recommendation import recommend_budget
# Load the trained model
model = joblib.load('ml_models/expense_classifier.pkl')

def categorize_expense(request):
    # Example input: amount, date, description
    amount = request.GET.get('amount')
    date = request.GET.get('date')
    description = request.GET.get('description')

    # Preprocess inputs
    input_data = np.array([amount, date, description]).reshape(1, -1)

    # Predict the category
    category_code = model.predict(input_data)[0]

    # Map the category code back to the category name
    category_mapping = {0: 'Groceries', 1: 'Transport', 2: 'Entertainment'}
    category = category_mapping[category_code]

    return JsonResponse({'category': category})



def recommend_budget_view(request):
    user_id = int(request.GET.get('user_id'))

    # Get budget recommendations
    recommendations = recommend_budget(user_id)

    return JsonResponse({'budget_recommendations': recommendations})

