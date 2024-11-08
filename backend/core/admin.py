from django.contrib import admin
from .models import Region, NeedList, Product, FarmerStack

# Register your models here.
admin.site.register(Region)
admin.site.register(NeedList)
admin.site.register(Product)
admin.site.register(FarmerStack)
