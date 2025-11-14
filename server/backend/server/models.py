from django.db import models

class Gallery(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    order = models.IntegerField(default=0)  
    image = models.ImageField(upload_to='gallery_images/', null=True, blank=True)
    is_draft = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']  

    def __str__(self):
        return self.title
