from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AIModelViewSet

# Create a router and register our viewset with it.
router = DefaultRouter()
router.register(r'aimodels', AIModelViewSet, basename='aimodel')

urlpatterns = router.urls
