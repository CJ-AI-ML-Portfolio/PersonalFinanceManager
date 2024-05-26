from django.test import TestCase
from django.contrib.auth import get_user_model
from graphene.test import Client
from core.schema import schema
from ..models import Expense

User = get_user_model()

class ExpenseGraphQLTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')

    def test_query_all_expenses(self):
        Expense.objects.create(
            amount=100.0,
            category='Groceries',
            date='2023-01-01',
            user=self.user
        )
        client = Client(schema)
        response = client.execute('''
            {
                allExpenses {
                    amount
                    category
                    date
                }
            }
        ''')
        self.assertEqual(response['data']['allExpenses'][0]['amount'], 100.0)
        self.assertEqual(response['data']['allExpenses'][0]['category'], 'Groceries')

    def test_create_expense_mutation(self):
        client = Client(schema)
        mutation = '''
            mutation {
                createExpense(amount: 50.0, category: "Transport") {
                    id
                    amount
                    category
                }
            }
        '''
        response = client.execute(mutation, context_value={'user': self.user})
        self.assertEqual(response['data']['createExpense']['amount'], 50.0)
        self.assertEqual(response['data']['createExpense']['category'], 'Transport')
