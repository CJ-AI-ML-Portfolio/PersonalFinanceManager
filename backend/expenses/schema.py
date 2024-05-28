import graphene
from graphene_django import DjangoObjectType
from .models import Expense
from datetime import datetime


class ExpenseType(DjangoObjectType):
    class Meta:
        model = Expense


class Query(graphene.ObjectType):
    all_expenses = graphene.List(ExpenseType)

    def resolve_all_expenses(self, info):
        return Expense.objects.all()


class CreateExpense(graphene.Mutation):
    id = graphene.Int()
    amount = graphene.Float()
    category = graphene.String()

    class Arguments:
        amount = graphene.Float()
        category = graphene.String()

    def mutate(self, info, amount, category):
        user = info.context.user
        expense = Expense(
            amount=amount, category=category, date=datetime.date.today(), user=user
        )
        expense.save()
        return CreateExpense(
            id=expense.id, amount=expense.amount, category=expense.category
        )


class Mutation(graphene.ObjectType):
    create_expense = CreateExpense.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
