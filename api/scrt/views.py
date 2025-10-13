import json
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from django.core.cache import cache

from cryptography.fernet import Fernet
from datetime import datetime

# Create your views here.

@csrf_exempt
def encrypt(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            secret = data.get('secret')

            date = datetime.now().strftime("%Y-%m-%d%H:%M:%S")

            key = Fernet.generate_key()
            suite = Fernet(key)
            encrypted = suite.encrypt((secret).encode())

            cache.set(key.decode(), encrypted, timeout=86400)

            # encrypted is to be stored in Redis

            return JsonResponse({'key': key.decode()})
        except Exception as e:
            print(e)
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def decrypt(request):
    if request.method == 'GET':
        try:
            key = request.GET.get('k')

            encrypted = cache.get(key)
            if not encrypted:
                return JsonResponse({'error': 'Invalid or expired key'}, status=400)

            cache.delete(key)

            suite = Fernet(key.encode())
            decrypted = suite.decrypt(encrypted).decode()
            original_secret = decrypted

            return JsonResponse({'secret': original_secret})
        except Exception as e:
            print(e)
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

