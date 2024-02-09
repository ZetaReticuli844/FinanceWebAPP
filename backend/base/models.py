from django.db import models
from user.models import NewUser

class Income(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    category = models.CharField(max_length=100)

class Expense(models.Model):
    user = models.ForeignKey(NewUser, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    category = models.CharField(max_length=100)

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
