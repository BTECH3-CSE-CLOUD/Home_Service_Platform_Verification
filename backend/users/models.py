from django.db import models  # type: ignore

# User model to store User details


class User(models.Model):
    name = models.CharField(max_length=100)  # user's full name
    email = models.EmailField(unique=True)  # user's unique email for login
    phone = models.CharField(max_length=15)  # user's contact number
    location = models.CharField(max_length=100)  # user's location


def __str__(self):
    return self.name
