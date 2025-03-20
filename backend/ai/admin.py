from django.contrib import admin
from .models import AIModel

# Register your models here.


@admin.register(AIModel)
class AIModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at',
                    'longitude', 'latitude')
    # search_fields = ('name',)
    # list_filter = ('created_at',)
