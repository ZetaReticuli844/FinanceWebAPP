from django.urls import path
from .views import HelloView,ExpenseList,IncomeList,ExpenseDetail,IncomeDetail

urlpatterns = [
    path('hello/', HelloView.as_view(), name='hello'),
    path('income/',IncomeList.as_view(),name='income'),
    path('income/<int:pk>/',IncomeDetail.as_view(),name='income-detail'),
    path('expense/',ExpenseList.as_view(),name='expense'),
    path('expense/<int:pk>',ExpenseDetail.as_view(),name='expense-detail')
    
]
