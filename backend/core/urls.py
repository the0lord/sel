from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, NeedListViewSet, FarmerStackViewSet, RegionViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'needlists', NeedListViewSet)
router.register(r'farmerstacks', FarmerStackViewSet)
router.register(r'region', RegionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]