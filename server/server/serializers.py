from . import models
from rest_framework import serializers

class GallerySerializer(serializers.ModelSerializer):
      class Meta:
        model = models.Gallery
        fields = '__all__'