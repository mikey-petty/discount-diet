from rest_framework import serializers
from .models import GoodFoods


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoodFoods  # The model you want to serialize
        fields = "__all__"  # All fields or specify ('id', 'name', etc.)
