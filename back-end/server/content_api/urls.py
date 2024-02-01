from django.urls import path, include
from .views import BlogsViewSet, UserViewSet
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter()
router.register(r'blogs', BlogsViewSet)

urlpatterns = [
    path('', include(router.urls), name='blogs-list'),
    path('<int:pk>/', include(router.urls), name='blog-delete')
    # path('users/', UserViewSet.as_view(), name='users-list'), 
    # Add other paths if needed
]

# Optionally, you can include the rest_framework URLs for authentication
urlpatterns += [
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

