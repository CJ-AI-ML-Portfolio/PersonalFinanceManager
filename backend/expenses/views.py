from django.shortcuts import render
from django.http import JsonResponse
import joblib
import numpy as np

# Load trained model
model = joblib.load('backend/ml_models/expense_classifier.pkl')

def categorize_expense(request):
    amount = float(request.GET.get('amount'))
    description_length = len(request.GET.get('description'))

    # Prepare input for prediction
    input_data = np.array([amount, description_length]).reshape(1, -1)

    # Predict the category
    category_code = model.predict(input_data)[0]

    # Map category code to name
    category_mapping = {0: 'Groceries', 1: 'Transport', 2: 'Entertainment'}
    category = category_mapping[category_code]

    return JsonResponse({'category': category})

def recommend_budget_view(request):
    user_id = int(request.GET.get('user_id'))

    # Get budget recommendations
    recommendations = recommend_budget(user_id)

    return JsonResponse({'budget_recommendations': recommendations})
