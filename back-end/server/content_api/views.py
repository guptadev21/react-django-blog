from django.shortcuts import get_object_or_404, render
from rest_framework import viewsets
from .serializers import blogsSerializer, UserSerializer
from .models import blogs, User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class BlogsViewSet(viewsets.ModelViewSet):
    queryset = blogs.objects.all().order_by('id')
    serializer_class = blogsSerializer
    # renderer_classes = [JSONRenderer]  # Ensure JSON rendering only

    def get_object(self):
        title = self.kwargs.get('title')
        return self.queryset.get(title=title)
    
    # @action(detail=True, methods=['delete'])
    def destroy(self, request, pk):
        try:
            instance = get_object_or_404(blogs, pk=pk)
            instance.delete()
            return Response({"message": "Blog deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except blogs.DoesNotExist:
            return Response({"message": "Blog not found."}, status=status.HTTP_404_NOT_FOUND)