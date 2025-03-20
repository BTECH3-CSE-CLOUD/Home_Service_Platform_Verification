from django.contrib import admin
from .models import Provider

# Register your models here.


@admin.register(Provider)  # Register the Provider model with the admin site
class ProviderAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'service_offered',
                    'location')  # Display the fields in the admin site
