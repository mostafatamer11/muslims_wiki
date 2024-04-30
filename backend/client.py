import requests

user = requests.request(url="http://localhost:5000/create_user", method="POST",
                            json={"username": "hi", "email": "hallo", "id": "8"})

response = requests.request(url="http://localhost:5000/update_user", method="PUT",
                            json={"username": "test", "email": "test", "id":"8"})


print(user.json())

print(response)


