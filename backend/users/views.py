from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

# Viewset for User model to handle CCRUD operations


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()  # Fetch all users
    serializer_class = UserSerializer  # use UserSerializer for Json conversion
