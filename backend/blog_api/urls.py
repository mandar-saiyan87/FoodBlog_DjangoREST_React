from django.urls import path, include
from .views import blogApiView, categoryApiView, CategoryPostApiView, PopularPostApiView, LatestPostApiView
from rest_framework import routers

# for django3 it's default router, django4 it's simple router
router = routers.SimpleRouter()

router.register('blogs', blogApiView, basename='blogs')
router.register('category', categoryApiView, basename='category')
router.register('categoryBasedBlogs', CategoryPostApiView,
                basename='categoryBasedBlogs')
router.register('popularBlogs', PopularPostApiView,
                basename='popularBlogs')
router.register('latestBlogs', LatestPostApiView,
                basename='latestBlogs')
urlpatterns = [
    path("", include(router.urls))
]
