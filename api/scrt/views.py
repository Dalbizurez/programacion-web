import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from cryptography.fernet import Fernet
from datetime import datetime

# Create your views here.

@csrf_exempt
def encrypt(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            secret = data.get('secret')

            date = datetime.now()

            key = Fernet.generate_key()
            suite = Fernet(key)
            encrypted = suite.encrypt(secret.encode())

            # encrypted is to be stored in Redis

            return JsonResponse({'key': key.decode()})
        except Exception as e:
            print(e)
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

