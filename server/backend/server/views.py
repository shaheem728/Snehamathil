from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import AccessToken
from django.contrib.auth.models import User
from . import models
from .serializers import GallerySerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny,IsAuthenticated, IsAdminUser
from rest_framework.generics import (
    ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, RetrieveAPIView
)
from rest_framework.views import APIView
# Create your views here.

# -------------------- USER VIEW --------------------
    
class GalleryView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = GallerySerializer
    queryset = models.Gallery.objects.all().order_by('order', '-created_at')


# -------------------- ADMIN VIEWS --------------------
User = get_user_model()

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user_obj = User.objects.filter(email=email).first()
            if user_obj:
                user = authenticate(username=user_obj.username, password=password)
                if user is not None and user.is_staff:
                    access = AccessToken.for_user(user)
                    return Response({
                        'access': str(access),
                    }, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            print(e)
            return Response({'error': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)
        
class CreateView(CreateAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = models.Gallery.objects.all()
    serializer_class = GallerySerializer
    

class EditingView(RetrieveAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = models.Gallery.objects.all()
    serializer_class = GallerySerializer
    lookup_field = 'id'

class DeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = models.Gallery.objects.all()
    serializer_class = GallerySerializer
    lookup_field = 'id'

class UpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = models.Gallery.objects.all()
    serializer_class = GallerySerializer
    lookup_field = 'id'
    
    def patch(self, request, *args, **kwargs):
        kwargs['partial'] = True  # ensures partial update
        return self.update(request, *args, **kwargs)