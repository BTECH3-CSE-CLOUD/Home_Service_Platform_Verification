from rest_framework import serializers
from .models import Provider

# create a serializer for the Provider model


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'
