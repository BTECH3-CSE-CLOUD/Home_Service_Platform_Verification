from rest_framework import serializers
from .models import AIModel

# Serializers define the API representation.


class AIModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIModel
        fields = '__all__'
