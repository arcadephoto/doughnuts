from django.urls import path, include

from .views import RecipeListView, RecipeCreateAPIView, RecipeRetrieveUpdateDestroyAPIView, RecipeDetailView


app_name = 'recipes'

urlpatterns = [

    path('recipes/', RecipeListView.as_view()),
    path('recipes/add/', RecipeCreateAPIView.as_view()),
    path('recipes/<int:pk>/', RecipeDetailView.as_view()),
    path('recipes/remove/<int:pk>/', RecipeRetrieveUpdateDestroyAPIView.as_view()),
    ]
