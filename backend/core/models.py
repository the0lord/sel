from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
class Product(models.Model):
    name = models.CharField(max_length=100)
    measurement_unit = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class NeedList(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.FloatField()
    date_needed = models.DateField()

    def __str__(self):
        return f"{self.product.name} - {self.quantity} {self.product.measurement_unit}"

class FarmerStack(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.FloatField()
    date_added = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.product.name} - {self.quantity} {self.product.measurement_unit}"