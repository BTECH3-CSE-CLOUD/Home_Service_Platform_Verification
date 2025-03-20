from django.contrib import admin
from .models import User

# Register the User Model in the Django admin panel


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    # Display these fields in the admin panel
    list_display = ('name', 'email', 'phone', 'location')
