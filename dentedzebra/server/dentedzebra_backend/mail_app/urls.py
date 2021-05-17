from django.conf.urls import url
from mail_app import views

urlpatterns = [
    url(r'^$',views.index, name='index'),
]
