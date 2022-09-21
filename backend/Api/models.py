from unicodedata import category
from django.db import models

# Create your models here.
# models.CharField(
#        max_length=50,
#        null=True,
#        default='',
#        blank=True)


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category,
                                 null=True,
                                 blank=True,
                                 on_delete=models.SET_NULL,
                                 related_name='products')
    icon = models.CharField(
        max_length=50,
        null=True,
        default='😈',
        blank=True)

    def __str__(self):
        return self.name


class List(models.Model):
    name = models.CharField(max_length=50, null=False)
    products = models.ManyToManyField(Product, related_name='lists')
    description = models.CharField(
        max_length=500,
        null=True,
        default='',
        blank=True)

    def __str__(self):
        return self.name
