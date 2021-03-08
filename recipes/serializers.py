from rest_framework import serializers

from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    pass

    class Meta:
        model = Recipe
        fields = '__all__'
