from django.shortcuts import render
from django.contrib.auth.hashers import make_password, check_password
from django.http import HttpResponseRedirect,HttpResponse
from django.db.models import Q
from navigation.models import *
import time
from datetime import timedelta
import datetime
import random
import requests
from bs4 import BeautifulSoup
import sys

# Create your views here.
def txl(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if ticket:
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] != "1":
                rows = email.objects.all().order_by('name')
                return render(request, './contact.html', {'rows': rows})
            else:
                return render(request, './admin.html')
        else:
            return HttpResponseRedirect('/login/')

def index(request):
    try:
        headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;",
            "Accept-Encoding": "gzip",
            "Accept-Language": "zh-CN,zh;q=0.8",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36"
        }
        urlfist = "https://www.uedbox.com/post/54776/"
        r = requests.options(urlfist, headers=headers)
        soup = BeautifulSoup(r.content, 'lxml')
        filedata = open("../static/thd/js/search.je2se", 'w')
        for td in soup.find_all('td'):
            for a in td.find_all('a'):
                filedata.write(a.attrs['href'] + "\n")
    except:
        pass
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if ticket:
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] != "1":
                rows = Data.objects.all().order_by('url')
                return render(request, './index.html', {'rows': rows})
            else:
                return render(request, './admin.html')
        else:
            return HttpResponseRedirect('/login/')

def login(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if ticket:
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                return HttpResponseRedirect('/admin/')
            else:
                return HttpResponseRedirect('/index/')
        else:
            return render(request, 'login.html')
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        # if login success set cookie
        name = request.POST.get('username')
        password = request.POST.get('password')
        if name and password:
            # check if user exist
            if User.objects.filter(Username=name).exists():
                user = User.objects.get(Username=name)
                if check_password(password, user.Password):
                    ticket = ''
                    for i in range(15):
                        s = 'abcdefghijklmnopqrstuvwxyz'
                        # get random string
                        ticket += random.choice(s)
                    now_time = int(time.time())
                    ticket = 'TK' + ticket + str(now_time)
                    response = HttpResponseRedirect('/index/')
                    response.set_cookie('ticket', ticket, max_age=10000)
                    user.ticket = ticket
                    user.save()
                    return response
                else:
                    return HttpResponse("<script>alert('密码输入错误');self.location.href='/login/'</script>")
            else:
                # return HttpResponse('username or password error')
                return render(request, 'login.html', {'password': 'username or password error'})
        else:
            # return HttpResponse('username or password error')
            return render(request, 'login.html', {'name': 'username or password error'})
    else:
        return HttpResponseRedirect('/login/')

def logout(request):
    if request.method == 'GET':
        # response = HttpResponse()
        response = HttpResponseRedirect('/login/')
        response.delete_cookie('ticket')
        return response

def admin(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            Power = User.objects.filter(ticket=ticket).values("Power")
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] =="1":
                    return render(request, './admin.html', {'Power': Power[0]["Power"]})
            else:
                return HttpResponseRedirect('/login/')

        else:
            return HttpResponseRedirect('/login/')

def urlist(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                rows = Data.objects.all().order_by('-urlname')
                return render(request, './urllist.html', {'rows': rows})
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('/login/')
def emaillist(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                rows = email.objects.all().order_by('-name')
                return render(request, './emaillist.html', {'rows': rows})
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('/login/')

def userlist(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                rows = User.objects.all().order_by('-Username')
                return render(request, './userlist.html', {'rows': rows})
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('/login/')


def useradd(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                return render(request, './useradd.html')
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                name = request.POST.get('username')
                if User.objects.filter(Username=name).count() > 0:
                    return HttpResponse("<script>alert('用户已存在')</script>")
                password = request.POST.get('password')
                mark = request.POST.get('Mark')
                if name and password and mark:
                    # crypto the password
                    password = make_password(password)
                    User.objects.create(Username=name, Password=password, Mark=mark)
                    return HttpResponse("<script type=\"text/javascript\" src=\"/static/lib/layui/layui.js\" charset=\"utf-8\"></script><script type=\"text/javascript\" src=\"/static/js/xadmin.js\"></script><script>xadmin.close();alert('创建成功');</script>")
                else:
                    return HttpResponseRedirect('../useradd/')
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('/login/')

def urladd(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                return render(request, './urladd.html')
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                urlname = request.POST.get('urlname')
                if Data.objects.filter(urlname=urlname).count() > 0:
                    return HttpResponse("<script>alert('Url已存在')</script>")
                urlinfo = request.POST.get('url')
                if urlname and urlinfo:
                    # crypto the password
                    Data.objects.create(urlname=urlname, url=urlinfo)
                    return HttpResponse("<script type=\"text/javascript\" src=\"/static/lib/layui/layui.js\" charset=\"utf-8\"></script><script type=\"text/javascript\" src=\"/static/js/xadmin.js\"></script><script>xadmin.close();alert('创建成功');</script>")
                else:
                    return HttpResponseRedirect('../urladd')
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('/login/')

def emailadd(request):
    if request.method == 'GET':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                return render(request, './email.html')
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                name = request.POST.get('name')
                fname = request.POST.get('fname')
                yemail = request.POST.get('email')
                tel = request.POST.get('tel')
                part = request.POST.get('part')
                if part and tel and email and fname and name:
                    # crypto the password
                    email.objects.create(name=name, tel=tel, fname=fname, part=part, email=yemail)
                    return HttpResponse("<script type=\"text/javascript\" src=\"/static/lib/layui/layui.js\" charset=\"utf-8\"></script><script type=\"text/javascript\" src=\"/static/js/xadmin.js\"></script><script>xadmin.close();alert('创建成功');</script>")
                else:
                    return HttpResponseRedirect('../emailadd')
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('/login/')
def emaildel(request):
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                Name = request.POST.get('name')
                if request.POST.get('delete'):
                    email.objects.filter(name=Name).delete()
                    return HttpResponse(
                        "<script>alert('删除成功,请手动关闭当前页');self.location.href='../emaillist/'</script>")
                else:
                    return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('login/')

def userdel(request):
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                userName = request.POST.get('userName')
                if request.POST.get('delete'):
                    User.objects.filter(Username=userName).delete()
                    return HttpResponse(
                        "<script>alert('删除成功,请手动关闭当前页');self.location.href='../userlist/'</script>")
                else:
                    return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('login/')

def urldel(request):
    if request.method == 'POST':
        ticket = request.COOKIES.get('ticket')
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).exists():
            if User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
                urlname = request.POST.get('urlname')
                if request.POST.get('delete'):
                    Data.objects.filter(urlname=urlname).delete()
                    return HttpResponse(
                        "<script>alert('删除成功,请手动关闭当前页');self.location.href='../urlist/'</script>")
                else:
                    return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
            else:
                return HttpResponse("<script>alert('您不是管理员');self.location.href='../index/'</script>")
        else:
            return HttpResponseRedirect('login/')

def adminchangepwd(request):
    ticket = request.COOKIES.get('ticket')
    if request.method == 'GET':
        username = request.GET.get('username')
        return render(request, 'password.html',{"username":username})
    if request.method == 'POST' and 'username' in request.POST and request.POST['username']:
        if not ticket:
            return HttpResponseRedirect('/login/')
        elif User.objects.filter(ticket=ticket).values("Power")[0]["Power"] == "1":
            username = request.POST.get('username')
            newpass = request.POST.get('newpass')
            repass = request.POST.get('repass')
            if newpass==repass:
                newpass = make_password(newpass)
                User.objects.filter(Username = username).update(Password=newpass)
                return HttpResponse( "<script type=\"text/javascript\" src=\"/static/lib/layui/layui.js\" charset=\"utf-8\"></script><script type=\"text/javascript\" src=\"/static/js/xadmin.js\"></script><script>xadmin.close();alert('修改成功,请手动关闭当前页');</script>")
            else:
                return HttpResponse("<script type=\"text/javascript\" src=\"/static/lib/layui/layui.js\" charset=\"utf-8\"></script><script type=\"text/javascript\" src=\"/static/js/xadmin.js\"></script><script>xadmin.close();alert('修改成功,请手动关闭当前页');</script>")
        else:
            return HttpResponseRedirect('/login/')