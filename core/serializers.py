from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *

class UserSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)
    phone = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'email',
            'phone',
            'first_name',
            'last_name',
            'id'
        ]

    def create(self,data):
        user = User.objects.create(
            username = data['username'],
            email = data['email'],
            # first_name=data['first_name'],
            # last_name = data['last_name']
        )
        user.set_password(data['password'])
        user.save()
        return user