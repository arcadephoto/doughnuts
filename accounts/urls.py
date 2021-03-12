from django.urls import path

from .views import ProfileListView, ProfileDetailView

urlpatterns = [
    path('profiles/', ProfileListView.as_view()),
    path('profiles/detail/', ProfileDetailView.as_view()),
]
