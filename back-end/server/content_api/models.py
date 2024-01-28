from django.db import models
import datetime

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=250)

    def __str__(self):
        return self.username  # Corrected from self.name

class blogs(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return self.title  # Corrected from self.name
