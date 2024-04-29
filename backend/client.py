import requests

requests.request("POST", "http://localhost:5000/create_user",
                 json={"id": 100, "username": "hello", "email": "email@example.com"})