from django.db import models

# Provide model to store service providers details


class Provider(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    service_offered = models.CharField()
    location = models.CharField(max_length=100)

    def __str__(self):
        return super().__str__()
