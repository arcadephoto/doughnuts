from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Recipe
from .serializers import RecipeSerializer


# Create your views here.



class RecipeListView(generics.ListAPIView):
    # queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        category = self.request.query_params.get('category', None)
        if category:
            return Recipe.objects.filter(category=category)
        return Recipe.objects.all()

class RecipeCreateAPIView(generics.CreateAPIView):

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class RecipeRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
