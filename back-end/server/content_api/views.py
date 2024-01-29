# from django.shortcuts import render
# from rest_framework import viewsets
# from rest_framework.renderers import JSONRenderer
# from .serializers import blogsSerializer, UserSerializer
# from .models import blogs, User
# from rest_framework.generics import DestroyAPIView
# from rest_framework.response import Response
# from rest_framework import status

# # Create your views here.

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all().order_by('username')
#     serializer_class = UserSerializer

# class blogsViewSet(viewsets.ModelViewSet):
#     queryset = blogs.objects.all().order_by('title')
#     serializer_class = blogsSerializer
#     # renderer_classes = [JSONRenderer]  # Ensure JSON rendering only

# class BlogDestroyAPIView(DestroyAPIView):
#     queryset = blogs.objects.all().order_by('title')
#     serializer_class = blogsSerializer

#     def get_object(self):
#         title = self.kwargs.get('title')
#         return self.queryset.get(title=title)

#     def destroy(self, request, *args, **kwargs):
#         instance = self.get_object()
#         self.perform_destroy(instance)
#         return Response({"message": "Blog deleted successfully."}, status=status.HTTP_204_NO_CONTENT)

from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import blogs, User
from .serializers import blogsSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class BlogsViewSet(viewsets.ModelViewSet):
    queryset = blogs.objects.all().order_by('title')
    serializer_class = blogsSerializer

class BlogDestroyAPIView(APIView):
    serializer_class = blogsSerializer

    def delete(self, request, *args, **kwargs):
        title = request.data.get('title', None)

        if title is not None:
            try:
                instance = blogs.objects.get(title=title)
                instance.delete()
                return Response({"message": "Blog deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
            except blogs.DoesNotExist:
                return Response({"message": "Blog not found."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"message": "Title is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
