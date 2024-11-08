from rest_framework import serializers
from .models import Product, NeedList, FarmerStack, Region


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'


class NeedListSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    region = RegionSerializer(read_only=True)

    class Meta:
        model = NeedList
        fields = '__all__'


class FarmerStackSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(required=False)
    product = ProductSerializer(read_only=True)
    region = RegionSerializer(read_only=True)

    class Meta:
        model = FarmerStack
        fields = '__all__'

