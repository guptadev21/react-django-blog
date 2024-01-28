from rest_framework import serializers
from .models import User, blogs

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class blogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = blogs
        fields = ('title', 'text')


