"""nth_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import *

urlpatterns = [
    path('users/', UserViewSet.as_view(actions={'get': 'list', 'post': 'create'}), name = 'list-create-users'),
    path('users/<int:pk>', UserViewSet.as_view(actions={'get': 'retrieve'}), name = 'retrieve-user'),
    # path('users/', UserRegisterView.as_view()),
    path('events/', EventsList.as_view()),
    path('events/<int:pk>', EventsDetail.as_view()),
    path('orders/', OrdersList.as_view()),
    path('orders/<int:pk>', OrderDetail.as_view()),
    path('place_order/', PlaceOrder.as_view()),
    path('account_detail/', AccountDetailView.as_view()),
]
