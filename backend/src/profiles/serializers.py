from django.contrib.auth import get_user_model
from rest_framework import serializers


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class UserCreateSerializer(serializers.ModelSerializer):
    """Only for creating users. Has password field.
    email declared instead of the default field to make
    it required
    """
    email = serializers.EmailField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
