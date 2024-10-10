from django.apps import AppConfig
from django.db import connections

class MyAppConfig(AppConfig):
    name = 'core'

    def ready(self):
        from django.db import connection
        if 'default' in connections:
            connection.close = lambda: None
