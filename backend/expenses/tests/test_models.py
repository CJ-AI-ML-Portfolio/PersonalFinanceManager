from .utils import BaseTestCase
from django.contrib.auth import get_user_model
from ..models import Expense

User = get_user_model()

class ExpenseModelTests(BaseTestCase):

    def setUp(self):
        super().setUp()
        self.user = User.objects.create_user(username='testuser', password='12345')

    def test_expense_creation(self):
        expense = Expense.objects.create(
            amount=100.0,
            category='Groceries',
            date='2023-01-01',
            user=self.user
        )
        self.assertEqual(expense.amount, 100.0)
        self.assertEqual(expense.category, 'Groceries')
        self.assertEqual(expense.date, '2023-01-01')
        self.assertEqual(expense.user, self.user)
