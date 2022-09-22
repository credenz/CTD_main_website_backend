# Generated by Django 4.0.5 on 2022-09-21 14:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_user_user_cart'),
    ]

    operations = [
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=255)),
                ('event_description', models.CharField(max_length=255)),
                ('event_start', models.DateField()),
                ('event_end', models.DateField()),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='user_cart',
        ),
        migrations.AddField(
            model_name='user',
            name='senior',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('event_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.events')),
                ('player_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
