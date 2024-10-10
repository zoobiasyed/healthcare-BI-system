from django.contrib import admin
from .models import Admin, Doctor, Consultation

admin.site.register(Admin)
admin.site.register(Doctor)
admin.site.register(Consultation)
