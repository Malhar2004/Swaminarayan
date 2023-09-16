from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "appointment/index.html")

def register(request):
    return render(request,"appointment/register.html")

def admin_login(request):
    return render(request, "appointment/admin_login.html")

def visit(request):
    return render(request, "appointment/visit.html")

