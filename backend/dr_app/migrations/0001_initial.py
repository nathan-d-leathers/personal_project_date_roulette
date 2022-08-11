# Generated by Django 4.1 on 2022-08-11 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500, unique=True)),
                ('description', models.CharField(max_length=1000, unique=True)),
                ('keywords', models.CharField(max_length=255, unique=True)),
            ],
        ),
    ]
