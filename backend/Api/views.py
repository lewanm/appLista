# from django.shortcuts import render
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from .models import *
import json

# Create your views here.


class ListsView(View):

    def get(self, request, id=0):
        # lists = List.objects.all()
        if id > 0:
            lists = list(List.objects.filter(id=id).values())
            if len(lists) > 0:
                theList = lists[0]
                datos = {
                    'message': 'Success',
                    'list': theList
                }
            else:
                datos = {
                    'message': 'Lists not found.'
                }
        else:
            lists = list(List.objects.values())
            if len(lists) > 0:
                datos = {
                    'message': 'Success',
                    'lists': lists
                }
            else:
                datos = {
                    'message': 'Lists not found.'
                }
        return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        List.objects.create(name=jd['name'], description=jd['description'])
        datos = {
            'message': 'Success',
        }

        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        lists = list(List.objects.filter(id=id).values())
        if len(lists) > 0:
            theList = List.objects.get(id=id)
            theList.name = jd['name']
            theList.description = jd['description']
            theList.save()
            datos = {
                'message': 'Success',
            }
        else:
            datos = {
                'message': 'Lists not found.'
            }
        return JsonResponse(datos)

    def delete(self, request, id):
        lists = list(List.objects.filter(id=id).values())
        if len(lists) > 0:
            List.objects.filter(id=id).delete()
            datos = {
                'message': 'Success',
            }
        else:
            datos = {
                'message': 'Lists not found.'
            }
        return JsonResponse(datos)


class ProductView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        # lists = List.objects.all()
        if id > 0:
            products = list(Product.objects.filter(id=id).values())
            if len(products) > 0:
                product = products[0]
                datos = {
                    'message': 'Success',
                    'list': product
                }
            else:
                datos = {
                    'message': 'Product not found.'
                }
        else:
            products = list(Product.objects.values())
            if len(products) > 0:
                datos = {
                    'message': 'Success',
                    'products': products
                }
            else:
                datos = {
                    'message': 'Product not found.'
                }
        return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Product.objects.create(name=jd['name'], category=jd['category'])
        datos = {
            'message': 'Success',
        }

        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        products = list(Product.objects.filter(id=id).values())
        if len(products) > 0:
            product = Product.objects.get(id=id)
            product.name = jd['name']
            product.category = jd['category']
            product.save()
            datos = {
                'message': 'Success',
            }
        else:
            datos = {
                'message': 'Product not found.'
            }
        return JsonResponse(datos)

    def delete(self, request, id):
        products = list(Product.objects.filter(id=id).values())
        if len(products) > 0:
            Product.objects.filter(id=id).delete()
            datos = {
                'message': 'Success',
            }
        else:
            datos = {
                'message': 'Products not found.'
            }
        return JsonResponse(datos)

    def getCategories(self, request):
        categories = list(Product.objects.all())
        print(categories)
