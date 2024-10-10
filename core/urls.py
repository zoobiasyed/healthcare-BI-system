from django.urls import path, include
from .views import (
    DoctorListCreateView, DoctorDetailView, 
    PatientListCreateView, PatientDetailView, 
    ConsultationListCreateView, ConsultationDetailView,
    DoctorViewSet, PatientViewSet, ConsultationViewSet
)
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Create a router for the API viewsets
router = DefaultRouter()
router.register(r'doctors', DoctorViewSet)
router.register(r'patients', PatientViewSet)
router.register(r'consultations', ConsultationViewSet)

# URL patterns
urlpatterns = [
    path('', views.index, name='index'),  
    path('api/', include(router.urls)),
    path('', views.frontend),
    
    # List and detail views for Doctors, Patients, and Consultations
    path('doctors/', DoctorListCreateView.as_view(), name='doctor-list'),
    path('doctors/<int:pk>/', DoctorDetailView.as_view(), name='doctor-detail'),
    path('patients/', PatientListCreateView.as_view(), name='patient-list'),
    path('patients/<int:pk>/', PatientDetailView.as_view(), name='patient-detail'),
    path('consultations/', ConsultationListCreateView.as_view(), name='consultation-list'),
    path('consultations/<int:pk>/', ConsultationDetailView.as_view(), name='consultation-detail'),
    
    # JWT token views for authentication
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
