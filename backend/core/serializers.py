from rest_framework import serializers
from .models import Product, NeedList, FarmerStack, Region
from authentication.serializers import CustomUserSerializer


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__'


class NeedListSerializer(serializers.ModelSerializer):
    product = ProductSerializer(required=False)
    region = RegionSerializer(required=False)
    product_id = serializers.IntegerField(required=False)
    region_id = serializers.IntegerField(required=False)

    def create(self, validated_data):
        if 'product_id' in validated_data:
            product = Product.objects.get(pk = validated_data['product_id'])
        else:
            product = validated_data['product']
        if 'region_id' in validated_data:
            region = Region.objects.get(pk = validated_data['region_id'])
        else:
            region = validated_data['region']
        need_list = NeedList.objects.create(
            product=product,
            region=region,
            **validated_data
        )
        return need_list


    class Meta:
        model = NeedList
        fields = '__all__'


class FarmerStackSerializer(serializers.ModelSerializer):
    user_id = CustomUserSerializer(read_only=True)
    product = ProductSerializer(required=False)
    region = RegionSerializer(required=False)
    product_id = serializers.IntegerField(required=False)
    region_id = serializers.IntegerField(required=False)

    def create(self, validated_data):
        if 'product_id' in validated_data:
            product = Product.objects.get(pk = validated_data['product_id'])
        else:
            product = validated_data['product']
        if 'region_id' in validated_data:
            region = Region.objects.get(pk = validated_data['region_id'])
        else:
            region = validated_data['region']
        return FarmerStack.objects.create(
            product = product,
            region = region,
            **validated_data
        )

    class Meta:
        model = FarmerStack
        fields = '__all__'

