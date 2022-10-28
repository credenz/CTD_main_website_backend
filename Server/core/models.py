from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.IntegerField(null = True)
    student_id = models.CharField(max_length = 11,null = False)
    
    def __str__(self):
        return str(self.username) + " PK: " + str(self.pk)

class Events(models.Model):
    event_name = models.CharField(max_length=255)
    event_description = models.CharField(max_length=255)
    event_id = models.CharField(max_length=255,default=101)
    event_start = models.DateTimeField()
    event_end = models.DateTimeField()

    def __str__(self):
        return str(self.event_name) + " pk = " + str(self.pk)

class Orders(models.Model):
    player_id = models.ForeignKey(User, on_delete=models.CASCADE)
    event_id = models.ForeignKey(Events, on_delete=models.CASCADE)
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.player_id.username) + " Order: " + self.event_id.event_name + " PK: " + str(self.pk)
    
