from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView
from .serializers import IncomeSerializer,ExpenseSerializer
from base.models import Expense,Income

class HelloView(APIView):
    def get(self, request):
        return Response({"message": "Hello"})
    
class ExpenseList(ListAPIView):
    serializer_class=ExpenseSerializer
    def get_queryset(self):
        user = self.request.user
        return Expense.objects.filter(user=user)


class ExpenseDetail(RetrieveUpdateDestroyAPIView):
    serializer_class=ExpenseSerializer
    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(user=user)
 

class IncomeList(ListAPIView):
    serializer_class=IncomeSerializer
    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(user=user)
    
    

class IncomeDetail(RetrieveUpdateDestroyAPIView):
    serializer_class=IncomeSerializer
    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(user=user)


