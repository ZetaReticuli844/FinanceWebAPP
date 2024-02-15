from rest_framework import serializers
from base.models import Category,Expense,Income
from django.conf import settings


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Expense
        fields=('id','user','amount','date','category')
        
class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Income
        fields=('id','user','amount','date','category')
        

    