# Migration File
import django.db.models.deletion
from django.db import migrations, models
from bson import ObjectId
from djongo import models as djongo_models

class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('_id', djongo_models.ObjectIdField(primary_key=True, default=ObjectId, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('specialization', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
            options={
                'db_table': 'Doctor',
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('_id', djongo_models.ObjectIdField(primary_key=True, default=ObjectId, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('date_of_birth', models.DateField()),
                ('contact_info', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'Patient',
            },
        ),
        migrations.CreateModel(
            name='Consultation',
            fields=[
                ('_id', djongo_models.ObjectIdField(primary_key=True, default=ObjectId, serialize=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('notes', models.TextField()),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.doctor')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.patient')),
            ],
            options={
                'db_table': 'Consultation',
            },
        ),
    ]
