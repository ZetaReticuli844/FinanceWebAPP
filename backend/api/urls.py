from django.urls import path
from .views import HelloView,ExpenseList,IncomeList,ExpenseDetail,IncomeDetail, CreateExpense, CreateIncome

urlpatterns = [
    path('hello/', HelloView.as_view(), name='hello'),
    path('income/',IncomeList.as_view(),name='income'),
    path('income/<int:pk>/',IncomeDetail.as_view(),name='income-detail'),
    path('expense/',ExpenseList.as_view(),name='expense'),
    path('expense/<int:pk>',ExpenseDetail.as_view(),name='expense-detail'),
    path('create/income/', CreateIncome.as_view(), name='create-income'),
    path('create/expense/',CreateExpense.as_view(),name='create-expense')
    
]
