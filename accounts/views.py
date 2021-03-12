
from django.shortcuts import render

from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer


# Create your views here.
class ProfileListView(generics.ListCreateAPIView):
    serializer_class = ProfileSerializer
    def get_queryset(self):
        queryset = Profile.objects.all()
        queryset = queryset.filter(user=self.request.user)
        return queryset
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
