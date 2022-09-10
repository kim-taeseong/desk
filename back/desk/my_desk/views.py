from rest_framework import generics
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.

class TodoList(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
