import requests

user = requests.request(url="http://localhost:5000/create_user", method="POST",
                            json={"username": "hi", "email": "hallo"})
print(user.json())


temp = requests.request(url="http://localhost:5000/users", method="GET")
users = temp.json()

for user in users["users"]:
    id = user["id"]
    print(requests.request(url=f"http://localhost:5000/remove_user/{id}", method="DELETE").json())