from django.core.exceptions import ValidationError
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.db.models import Q
User = get_user_model()
class Product(models.Model):
    name = models.CharField(max_length=100)
    measurement_unit = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Region(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class NeedList(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.FloatField()
    start_date = models.DateField()
    end_date = models.DateField()
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.name} - {self.quantity} {self.product.measurement_unit}"


@receiver(pre_save, sender=NeedList)
def pre_save_collision_check(sender, instance, **kwargs):
    # Check for overlapping date ranges in the same region and product using OR condition
    overlapping_entries = NeedList.objects.filter(
        Q(product=instance.product) &
        Q(region=instance.region) &
        (
                Q(start_date__lte=instance.end_date) |  # OR condition 1: Start overlaps
                Q(end_date__gte=instance.start_date)  # OR condition 2: End overlaps
        )
    ).exclude(id=instance.id)  # Exclude the current instance (important during updates)

    if overlapping_entries.exists():
        raise ValidationError(
            f"An entry for {instance.product.name} in region {instance.region.name} "
            f"overlaps with the date range {instance.start_date} to {instance.end_date}."
        )

class FarmerStack(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.FloatField()
    delivery_date = models.DateField(auto_now_add=True)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.name} - {self.quantity} {self.product.measurement_unit}"