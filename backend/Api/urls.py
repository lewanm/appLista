from django.urls import path
from .views import ListsView
from .views import ProductView

urlpatterns = [
    path('lists/', ListsView.as_view(), name='ver listas'),
    path('lists/<int:id>', ListsView.as_view(), name="ver una lista "),
    path('products/', ProductView.as_view(), name='ver productos')
]
