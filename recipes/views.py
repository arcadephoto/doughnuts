from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Recipe
from .serializers import RecipeSerializer


# Create your views here.
class RecipeListView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
