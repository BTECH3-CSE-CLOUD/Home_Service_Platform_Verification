from rest_framework import serializers
from .models import User
# Serializer for the User Model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Specify the model for serializer
        fields = '__all__'  # Include all fields in the model
