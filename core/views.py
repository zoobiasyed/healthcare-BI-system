from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Doctor, Patient, Consultation
from .serializers import DoctorSerializer, PatientSerializer, ConsultationSerializer
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAdmin, IsDoctor, IsPatient
from rest_framework_simplejwt.authentication import JWTAuthentication  # Import JWT Authentication

def frontend(request):
    return render(request, 'frontend/build/index.html')

def index(request):
    """Welcome page."""
    return HttpResponse("Welcome to the Healthcare BI System made by Zoobia, Hafsa and Aiman!")

# Class to list or create doctors
class DoctorListCreateView(generics.ListCreateAPIView):
    """List all doctors or create a new doctor."""
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [JWTAuthentication]  # Add JWT Authentication
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

# Class to retrieve, update or delete a doctor
class DoctorDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update, or delete a doctor."""
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

# Class to list or create patients
class PatientListCreateView(generics.ListCreateAPIView):
    """List all patients or create a new patient."""
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

# Class to retrieve, update or delete a patient
class PatientDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update, or delete a patient."""
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

# Class to list or create consultations
class ConsultationListCreateView(generics.ListCreateAPIView):
    """List all consultations or create a new consultation."""
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

# Class to retrieve, update or delete a consultation
class ConsultationDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update, or delete a consultation."""
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]  # Ensure the user is authenticated

# Viewset to manage doctors
class DoctorViewSet(viewsets.ModelViewSet):
    """Manage doctors through a viewset."""
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

# Viewset to manage patients
class PatientViewSet(viewsets.ModelViewSet):
    """Manage patients through a viewset."""
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

# Viewset to manage consultations
class ConsultationViewSet(viewsets.ModelViewSet):
    """Manage consultations through a viewset."""
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

# Admin view that requires admin permissions
class AdminView(generics.RetrieveAPIView):
    """Retrieve information for the admin user."""
    permission_classes = [IsAuthenticated, IsAdmin]
    queryset = Doctor.objects.all()  # Adjust as per your admin model
    serializer_class = DoctorSerializer  # Change to appropriate serializer if needed
    authentication_classes = [JWTAuthentication]

    def get(self, request, *args, **kwargs):
        """Get admin information."""
        return self.retrieve(request, *args, **kwargs)

# Doctor view that requires doctor permissions
class DoctorView(generics.RetrieveAPIView):
    """Retrieve information for the authenticated doctor."""
    permission_classes = [IsAuthenticated, IsDoctor]
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    authentication_classes = [JWTAuthentication]

    def get(self, request, *args, **kwargs):
        """Get doctor information."""
        return self.retrieve(request, *args, **kwargs)

# Patient view that requires patient permissions
class PatientView(generics.RetrieveAPIView):
    """Retrieve information for the authenticated patient."""
    permission_classes = [IsAuthenticated, IsPatient]
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    authentication_classes = [JWTAuthentication]

    def get(self, request, *args, **kwargs):
        """Get patient information."""
        return self.retrieve(request, *args, **kwargs)
