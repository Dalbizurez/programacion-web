from django.db import models

# Create your models here.

class Book(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.ForeignKey('Author', on_delete=models.DO_NOTHING)
    genre = models.ForeignKey('Genre', on_delete=models.DO_NOTHING)
    publisher = models.CharField(max_length=255)
    number_of_pages = models.IntegerField()

class Author(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

class Genre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()