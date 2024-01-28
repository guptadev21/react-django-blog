from django.urls import include, path
from .views import *
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'blogs', blogsViewSet)

urlpatterns = [
    # Add your URL patterns here
    path('', include(router.urls)),
]
