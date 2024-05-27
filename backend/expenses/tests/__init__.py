import os
import django
from django.conf import settings

# Ensure the settings are configured for test purposes
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

# Setup Django
django.setup()

# Import common test utilities or base test classes
from .utils import BaseTestCase

# Additional setup code if needed
print("Initializing test environment for the 'expenses' app.")
