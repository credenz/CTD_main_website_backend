# Generated by Django 4.0.5 on 2022-10-26 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='event_end',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='events',
            name='event_start',
            field=models.DateTimeField(),
        ),
    ]