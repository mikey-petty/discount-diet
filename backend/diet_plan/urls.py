from django.urls import path
from .views import get_diet_plan, get_good_food, set_name

urlpatterns = [
    path('api/get_diet_plan/', get_diet_plan, name='get_diet_plan'),  # Define the correct path
    path('api/get_good_food/', get_good_food, name='get_good_food'),  # Define the correct path
    path('api/set_name/', set_name, name='set_name'),  # Define the correct path

]