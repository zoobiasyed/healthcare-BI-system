from djongo import models
from bson import ObjectId

# Admin Model
class Admin(models.Model):
    _id = models.ObjectIdField(default=ObjectId, primary_key=True)  # Primary key
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=100)

    class Meta:
        db_table = "Admin"

# Doctor Model
class Doctor(models.Model):
    _id = models.ObjectIdField(default=ObjectId, primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    doctor_id = models.CharField(max_length=50)
    doctor_password = models.CharField(max_length=100)
    fellowships = models.JSONField()
    department = models.CharField(max_length=100)
    years_of_experience = models.IntegerField()
    image = models.CharField(max_length=255)
    address = models.JSONField()

    class Meta:
        db_table = "Doctor"

# Consultation Model
class Consultation(models.Model):
    _id = models.ObjectIdField(default=ObjectId, primary_key=True)
    first_name = models.CharField(max_length=100, default='John')
    last_name = models.CharField(max_length=100, default='Doe')
    ahccardno = models.CharField(max_length=50, default='default_card_no')
    department = models.CharField(max_length=100, default='General')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.DateField()

    class Meta:
        db_table = "Consultations"

# Patient Model
class Patient(models.Model):
    _id = models.ObjectIdField(default=ObjectId, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phone = models.CharField(max_length=20)
    ahccardno = models.CharField(max_length=50, default='default_card_no')
    password = models.CharField(max_length=100)
    addresses = models.JSONField()

    class Meta:
        db_table = "Patient"

# Billing Model
class Billing(models.Model):
    _id = models.ObjectIdField(default=ObjectId, primary_key=True)
    client_no = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    medicine = models.JSONField()

    class Meta:
        db_table = "Billing"

# Medicines Model
class Medicine(models.Model):
    _id = models.ObjectIdField(default=ObjectId, primary_key=True)
    medicine_name = models.CharField(max_length=100)
    mg = models.CharField(max_length=20)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        db_table = "Medicines"
