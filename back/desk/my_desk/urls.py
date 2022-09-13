from django.urls import path
from . import views

urlpatterns = [
    path('api/todos/', views.TodoList.as_view()),
    path('api/todos/<int:pk>', views.TodoDetail.as_view())
]