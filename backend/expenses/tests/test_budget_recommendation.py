from .utils import BaseTestCase
from ..ml_models.budget_recommendation import recommend_budget
from ..models import Expense
from django.contrib.auth import get_user_model

User = get_user_model()

class BudgetRecommendationTests(BaseTestCase):

    def setUp(self):
        super().setUp()
        self.user = User.objects.create_user(username='testuser', password='12345')
        self.other_user = User.objects.create_user(username='otheruser', password='12345')
        
        Expense.objects.create(amount=100.0, category='Groceries', date='2023-01-01', user=self.user)
        Expense.objects.create(amount=50.0, category='Transport', date='2023-01-02', user=self.user)
        Expense.objects.create(amount=80.0, category='Groceries', date='2023-02-01', user=self.user)
        Expense.objects.create(amount=120.0, category='Entertainment', date='2023-02-01', user=self.other_user)

    def test_recommend_budget(self):
        recommendations = recommend_budget(self.user.id)
        self.assertIn('Groceries', recommendations)
        self.assertIn('Transport', recommendations)
        self.assertAlmostEqual(recommendations['Groceries'], 90.0, places=1)
        self.assertAlmostEqual(recommendations['Transport'], 50.0, places=1)
