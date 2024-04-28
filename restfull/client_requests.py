import requests

BASE_URL = "http://127.0.0.1:5000/"

response = requests.post(BASE_URL + "post/12")
print(response.json())