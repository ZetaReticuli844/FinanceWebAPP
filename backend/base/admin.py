from django.contrib import admin
from .models import Income,Expense,Category

admin.site.register(Category)
admin.site.register(Income)
admin.site.register(Expense)