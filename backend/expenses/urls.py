from django.urls import path
from . import views

urlpatterns = [
    path('categorize_expense/', views.categorize_expense, name='categorize_expense'),
    path('recommend_budget/', views.recommend_budget_view, name='recommend_budget'),
]
