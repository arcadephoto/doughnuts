from django.test import SimpleTestCase

from django.test import TestCase

from django.urls import reverse, resolve

from .views import IndexView

class HomePageTests(SimpleTestCase):
    '''unit tests are executed top-to-bottom'''


    def setUp(self):
        url = reverse('frontend:home')
        self.response = self.client.get(url)


    def test_homepage_status_code(self):
        self.assertEqual(self.response.status_code, 200)

    def test_homepage_url_name(self):
        response = self.client.get(reverse('frontend:home'))
        self.assertEqual(response.status_code, 200)

    def test_homepage_url_resolves_homepageview(self):
        view = resolve('/')
        self.assertEqual(
            view.func.__name__,
            IndexView.as_view().__name__
    )

# Create your tests here.
