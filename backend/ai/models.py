from django.db import models

# Create your models here.


class AIModel(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    latitude = models.FloatField(null=True, blank=True)  # Field for latitude
    longitude = models.FloatField(null=True, blank=True)  # Field for longitude
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
