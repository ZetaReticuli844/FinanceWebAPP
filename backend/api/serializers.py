from rest_framework import serializers
from base.models import Category,Expense,Income
from django.conf import settings


class ExpenseSerializer(serializers):
    class meta:
        model=Expense
        fields=('user','amount','date','category')
        
class IncomeSerializer(serializers):
    class meta:
        model=Expense
        fields=('user','amount','date','category')
        

    