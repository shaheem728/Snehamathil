from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view()),
    path('gallery/', views.GalleryView.as_view()),
    path('gallery/create/', views.CreateView.as_view()),
    path('gallery/editing/<int:id>/', views.EditingView.as_view()),
    path('gallery/delete/<int:id>/', views.DeleteView.as_view()),
    path('gallery/update/<int:id>/', views.UpdateView.as_view()),
]

