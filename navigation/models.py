from django.db import models

# Create your models here.
class User(models.Model):
    ID = models.AutoField(primary_key=True, null=False)
    Username = models.TextField(null=False)
    Password = models.TextField(null=False)
    ticket = models.TextField(null=False)
    Mark = models.TextField(null=False)
    Power = models.TextField(null=False)


class Data(models.Model):
    ID = models.AutoField(primary_key=True, null=False)
    urlname = models.TextField(null=False)
    url = models.TextField(null=False)

class email(models.Model):
    ID = models.AutoField(primary_key=True, null=False)
    name = models.TextField(null=False)
    tel = models.TextField(null=False)
    part = models.TextField(null=False)
    fname = models.TextField(null=False)
    email = models.TextField(null=False)