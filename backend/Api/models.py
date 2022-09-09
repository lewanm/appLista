from unicodedata import category
from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(
        max_length=50,
        null=True,
        default='',
        blank=True)

    def __str__(self):
        return self.name


class List(models.Model):
    name = models.CharField(max_length=50, null=False)
    products = models.ManyToManyField(Product, related_name='lists')
    description = models.CharField(max_length=400)

    def __str__(self):
        return self.name
