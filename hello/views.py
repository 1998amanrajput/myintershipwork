from django.shortcuts import render 
from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponse



class Home(View):
    def get(self, request, *args, **kwargs):
        context = {'message': 'homepage'}
        return render(request, "home.html", context=context)


class Netguru(View):
    def get(self, request, *args, **kwargs):
        context = {'message': 'Netguru'}
        return render(request, "netguru.html", context=context)

class Pubg(View):
    def get(self, request, *args, **kwargs):
        context = {'message': 'Netguru'}
        return render(request, "pubg.html", context=context)

class About(View):
    def get(self, request, *args, **kwargs):
        context = {'message': 'About'}
        return render(request, "about.html", context=context)

class Calculator(View):
    def get(self, request, *args, **kwargs):
        context={'message':'Calculator'}
        return render(request,"calculator.html")


class Json(View):
    def get(self, request, *args, **kwargs):
        context={'message':'Json Project'}
        return render(request,"json.html",context=context)

class StoreData(View):
    def get(self, request, *args, **kwargs):
        context={'message':'Store Information'}
        return render(request,"datamanagment.html")


def Nothing(request):
    return HttpResponse("This Site has nothing")


