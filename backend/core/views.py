from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, NeedList, FarmerStack, Region
from .serializers import ProductSerializer, NeedListSerializer, FarmerStackSerializer, RegionSerializer
from .permissions import IsAdminOrReadOnly, IsStaffOrReadOnly, FarmerStackPermission
from django.db.models import Q


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

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user)

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer
    permission_classes = [IsAdminOrReadOnly]

@api_view(['GET'])
def get_deficiency(request, need_list_id):
    need_list = NeedList.objects.get(id=need_list_id)
    deficiency = need_list.quantity
    for farmer_stack in FarmerStack.objects.filter(
            Q(product=need_list.product) &
            Q(region=need_list.region) &
            (
                    Q(delivery_date__lte=need_list.end_date) |  # OR condition 1: Start overlaps
                    Q(delivery_date__gte=need_list.start_date)  # OR condition 2: End overlaps
            )
    ):
        deficiency -= farmer_stack.quantity

    return Response(deficiency)


@api_view(['GET'])
def get_all_deficiencies(request):
    need_list = NeedList.objects.all()
    farmer_stacks = FarmerStack.objects.all()
    deficiency = need_list.quantity
    for farmer_stack in FarmerStack.objects.filter(
            Q(product=need_list.product) &
            Q(region=need_list.region) &
            (
                    Q(delivery_date__lte=need_list.end_date) |  # OR condition 1: Start overlaps
                    Q(delivery_date__gte=need_list.start_date)  # OR condition 2: End overlaps
            )
    ):
        deficiency -= farmer_stack.quantity

    return Response(deficiency)

    