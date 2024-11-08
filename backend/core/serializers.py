from rest_framework import serializers
from .models import Product, NeedList, FarmerStack

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class NeedListSerializer(serializers.ModelSerializer):
    class Meta:
        model = NeedList
        fields = '__all__'

class FarmerStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerStack
        fields = '__all__'