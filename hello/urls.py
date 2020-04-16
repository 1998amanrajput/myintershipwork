from django.urls import path
from hello import views

urlpatterns = [
     path('about/', views.About.as_view(),name="about"),
     path('pubg/', views.Pubg.as_view(),name="pubg"),
     path("netguru/", views.Netguru.as_view(), name="netguru"),
     path("calculator/", views.Calculator.as_view(), name="calculator"),
     path("Json/", views.Json.as_view(), name="Json_Project"),
     path("CRUD/", views.StoreData.as_view(), name="StoreData"),
     path("", views.Home.as_view(), name="home"),
   
]