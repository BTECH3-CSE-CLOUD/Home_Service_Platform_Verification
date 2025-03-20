from rest_framework import viewsets
from .models import AIModel
from .serializers import AIModelSerializer

# ViewSets define the view behavior.


class AIModelViewSet(viewsets.ModelViewSet):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer
