from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ProviderViewSet

# Create a router and register our viewset with it.
router = DefaultRouter()
# Register the viewset with the router
router.register(r'providers', ProviderViewSet)

urlpatterns = router.urls
