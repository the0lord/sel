from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product, NeedList, FarmerStack
from .serializers import ProductSerializer, NeedListSerializer, FarmerStackSerializer
from .permissions import IsAdminOrReadOnly, IsStaffOrReadOnly

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsStaffOrReadOnly]


class NeedListViewSet(viewsets.ModelViewSet):
    queryset = NeedList.objects.all()
    serializer_class = NeedListSerializer
    permission_classes = [IsAdminOrReadOnly]

class FarmerStackViewSet(viewsets.ModelViewSet):
    queryset = FarmerStack.objects.all()
    serializer_class = FarmerStackSerializer
    permission_classes = [FarmerStackPermission]
    