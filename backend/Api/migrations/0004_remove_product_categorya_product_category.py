# Generated by Django 4.1 on 2022-09-19 16:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0003_remove_product_category_product_categorya'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='categorya',
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(blank=True, default='sin categoria', null=True, on_delete=django.db.models.deletion.SET_DEFAULT, to='Api.category'),
        ),
    ]