from django.urls import path, include

from .views import RecipeListView


app_name = 'recipes'

urlpatterns = [

    path('recipes/', RecipeListView.as_view()),
    ]
