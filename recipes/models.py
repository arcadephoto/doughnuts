from django.db import models
from django.conf import settings


# Create your models here.
class Recipe(models.Model):

    ALL = 'All'
    CUSTOM = 'Custom'
    POPULAR = 'Popular'
    PUBLIC = 'Public'
    FAVORITE = 'Favorite'
    PANTRY = 'Pantry'
    CATEGORIES = [
        (ALL, 'All'),
        (CUSTOM, 'Custom'),
        (PUBLIC, 'Public'),
        (POPULAR, 'Popular'),
        (FAVORITE, 'Favorite'),
        (PANTRY, 'Pantry'),
    ]

    BREAKFAST = 'Breakfast'
    LUNCH = 'Lunch'
    DINNER = 'Dinner'
    DESSERT = 'Dessert'


    TYPES = [
        (BREAKFAST, 'Breakfast'),
        (LUNCH, 'Lunch'),
        (DINNER, 'Dinner'),
        (DESSERT, 'Dessert'),

    ]



    title = models.CharField(max_length=255, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=True)
    body = models.TextField(null=True)
    public = models.BooleanField(default=True)
    preptime = models.IntegerField(default=60)
    cooktime = models.IntegerField(default=60)
    cooktemp = models.IntegerField(default=350)
    tempscale = models.CharField(max_length=255, null=True, default="Fahrenheit")
    amount = models.IntegerField(default=4)
    units = models.CharField(max_length=255, null=True, default="servings")
    notes = models.TextField(null=True, default="This recipe site is great!")
    weightScale = models.CharField(max_length=255, null=True, default="ounces")
    ingredientList = models.TextField(null=True)
    profile_picture = models.ImageField(upload_to='recipes/', null=True)



    type = models.CharField(
        max_length=10,
        choices=TYPES,
        default=LUNCH, null=True)
    category = models.CharField(
        max_length=10,
        choices=CATEGORIES,
        default=ALL, null=True)

    def __str__(self):
        return self.title + str(self.id)
