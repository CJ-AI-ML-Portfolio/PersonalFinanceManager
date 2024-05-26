from django.urls import path
from . import views
from . import budget_recommendation

urlpatterns = [
    path('categorize_expense/', views.categorize_expense, name='categorize_expense'),
    path('recommend_budget/', budget_recommendation.recommend_budget, name='recommend_budget'),
]
