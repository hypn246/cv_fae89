from django.shortcuts import redirect, HttpResponse
from Age.models import AgeEst
from Age.serializers import AgeSer
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

import os
from Facial_Age_estimation_PyTorch import inference
# Create your views here.
def win(request):
    return HttpResponse('ok')

@api_view(['GET'])
def result(request):
    return HttpResponse('ok')

@csrf_exempt
def estimate(request):
    upload_path=os.listdir('upload/img_upload/')
    if request.method == 'POST':
    
        image = request.FILES.get('image')
        print(image)
        if not os.path.exists("upload/img_upload"):
            os.mkdir('upload/img_upload')
        if os.listdir('upload/img_upload'):
            AgeEst.objects.all().delete()
            for f in upload_path:
                if (f==upload_path[0]):
                    continue
                else:
                    os.remove(f'C:/Users/admin/Desktop/PRO/Project/smile/backend/upload/img_upload/{f}')
        new= AgeEst.objects.create(image=image)
        new.save()
        result=inference.inference(f'upload/{new.image}')
        result=result[1]
        AgeEst.objects.filter(image=new.image).update(result=result)
        return redirect('http://localhost:3000/result')
    if request.method == 'GET':
        data=list(AgeEst.objects.all())
        data=AgeSer(data, many=True)
        data=data.data[0]
        print(data)
        return JsonResponse(data, safe=False)