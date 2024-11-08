from rest_framework import viewsets
from rest_framework.response import Response
from .models import Product, NeedList, FarmerStack
from .serializers import ProductSerializer, NeedListSerializer, FarmerStackSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class NeedListViewSet(viewsets.ModelViewSet):
    queryset = NeedList.objects.all()
    serializer_class = NeedListSerializer

class FarmerStackViewSet(viewsets.ModelViewSet):
    queryset = FarmerStack.objects.all()
    serializer_class = FarmerStackSerializer