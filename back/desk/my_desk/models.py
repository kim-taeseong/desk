from django.db import models

# Create your models here.

class Todo(models.Model):
    todo = models.CharField(max_length=100)
    done = models.BooleanField()
    day = models.DateField(auto_now_add=True)