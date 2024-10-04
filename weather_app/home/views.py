from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from weather_app.settings import MAP_KEY

def home(request):
    template = loader.get_template("index.html")
    context = {
        "range": range(100)
    }
    return HttpResponse(template.render(context=context))


def map(request):
    template = loader.get_template("map.html")
    context = {
        "key": MAP_KEY
    }
    return HttpResponse(template.render(context=context))