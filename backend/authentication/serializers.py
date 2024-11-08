from djoser.serializers import UserSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class CustomUserSerializer(UserSerializer):

    class Meta(UserSerializer.Meta):
        model = User
        fields = ['id', 'username', 'email', 'role']  # Customize the fields you want

    def get_full_name(self, obj):
        return f"{obj.username}"
