from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView,CreateAPIView,DestroyAPIView
from .serializers import IncomeSerializer,ExpenseSerializer
from base.models import Expense,Income
from rest_framework.permissions import SAFE_METHODS, IsAuthenticated, IsAuthenticatedOrReadOnly, BasePermission, IsAdminUser, DjangoModelPermissions,AllowAny


class PostUserWritePermission(BasePermission):
    message = 'Sorry you are not allowed to access this'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        return obj.user == request.user

class HelloView(APIView):
    def get(self, request):
        return Response({"message": "Hello"})
    
class ExpenseList(ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=ExpenseSerializer
    def get_queryset(self):
        user = self.request.user
        return Expense.objects.filter(user=user)


class ExpenseDetail(RetrieveUpdateDestroyAPIView):
    permission_classes=[PostUserWritePermission]
    serializer_class=ExpenseSerializer
    def get_queryset(self):
        user = self.request.user
        return Expense.objects.filter(user=user)
 

class IncomeList(ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=IncomeSerializer
    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(user=user)
    
    

class IncomeDetail(RetrieveUpdateDestroyAPIView):
    permission_classes=[PostUserWritePermission]
    serializer_class=IncomeSerializer
    def get_queryset(self):
        user = self.request.user
        return Income.objects.filter(user=user)


class CreateIncome(CreateAPIView):
    permission_classes=[IsAuthenticated]

    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    
class CreateExpense(CreateAPIView):
    permission_classes=[IsAuthenticated]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    
    
