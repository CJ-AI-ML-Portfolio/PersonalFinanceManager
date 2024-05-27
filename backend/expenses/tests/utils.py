from django.test import TestCase

class BaseTestCase(TestCase):
    """
    A base test class that can be extended by other test cases.
    It includes common setup or utility methods.
    """

    def setUp(self):
        # Common setup code for all tests
        print("Common setup for test cases.")
        super().setUp()

    def tearDown(self):
        # Common teardown code for all tests
        print("Common teardown for test cases.")
        super().tearDown()
