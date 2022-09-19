# Generated by Django 4.1 on 2022-09-19 16:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0002_rename_categorya_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.AddField(
            model_name='product',
            name='categorya',
            field=models.ForeignKey(blank=True, default='sin categoria', null=True, on_delete=django.db.models.deletion.SET_DEFAULT, to='Api.category'),
        ),
    ]