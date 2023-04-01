from rest_framework import serializers
from .models import category, blog


class blogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blog
        fields = '__all__'


class categorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = '__all__'
