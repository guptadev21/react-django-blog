# from django.urls import include, path
# from .views import blogsViewSet, BlogDestroyAPIView
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'blogs', blogsViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
#     path('delete/<str:title>/', BlogDestroyAPIView.as_view(), name='blog-delete'),
# ]


from django.urls import include, path
from .views import BlogsViewSet, BlogDestroyAPIView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'blogs', BlogsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('blogs/delete/', BlogDestroyAPIView.as_view(), name='blog-delete'),
]