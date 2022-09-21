from django.urls import path
from .views import *


urlpatterns = [
    path('lists/', ListsView.as_view(), name='ver listas'),
    path('lists/<int:id>', ListsView.as_view(), name="ver una lista "),
    path('products/', ProductView.as_view(), name='ver productos'),
    path('products/<int:id>', ProductView.as_view(), name='ver un producto'),
]
