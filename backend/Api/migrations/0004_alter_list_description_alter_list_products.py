# Generated by Django 4.1 on 2022-09-14 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0003_alter_list_products_alter_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list',
            name='description',
            field=models.CharField(blank=True, default='', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='list',
            name='products',
            field=models.ManyToManyField(blank=True, default='', null=True, related_name='lists', to='Api.product'),
        ),
    ]