import requests

user = requests.request(url="http://localhost:5000/create_user", method="POST",
                            json={"username": "hi", "email": "hallo"})



print(user.json())



