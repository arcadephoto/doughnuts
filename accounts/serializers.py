from rest_framework import serializers

from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
        user = serializers.ReadOnlyField(source='user.username')
        date = serializers.ReadOnlyField(source='user.date_joined')

        class Meta:
            model = Profile
            fields = '__all__'
