from django.urls import path, include
from rest_framework import routers
from . import views
from searchapp import views

router = routers.DefaultRouter()
router.register(r'countries', views.CountryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
