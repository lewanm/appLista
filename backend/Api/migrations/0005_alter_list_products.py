# Generated by Django 4.1 on 2022-09-15 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0004_alter_list_description_alter_list_products'),
    ]

    operations = [
        migrations.AlterField(
            model_name='list',
            name='products',
            field=models.ManyToManyField(related_name='lists', to='Api.product'),
        ),
    ]