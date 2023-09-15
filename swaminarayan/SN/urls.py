from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("reg/", views.register, name="reg"),
    path("admin-login/", views.admin_login, name="admin-login"),
    path("visit/",views.visit, name="visit"),

]
