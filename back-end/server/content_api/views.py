from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer

from .serializers import blogsSerializer, UserSerializer
from .models import blogs, User

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class blogsViewSet(viewsets.ModelViewSet):
    queryset = blogs.objects.all().order_by('title')
    serializer_class = blogsSerializer
    # renderer_classes = [JSONRenderer]  # Ensure JSON rendering only
