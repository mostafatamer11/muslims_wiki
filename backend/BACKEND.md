# The zikr bits' api
## Functions:
- `create_user()`
```py
@app.route("/create_user", methods=["POST"])
def create_user():
    """
    create user endpoint
    :parameters: 
        a json with the following keys:
            - id
            - username
            - email

    :returns:
        a json with the following keys:
            - message
    """
```

- `get_users()`
```py
@app.route("/users", methods=["GET"])
def get_users():
    """
    get all users endpoint
    :parameters:
        none

    :returns:
        a json with the following keys:
            - users
    """
```

- `get_user(id)`
```py
@app.route("/user/<int:id>", methods=["GET"])
def get_user(id):
    """
    get user by id endpoint
    :parameters:
        id
    :returns:
        a json with the following keys:
            - user
            - message
    """
```

- `remove_user(id)`
```py
@app.route("/remove_user/<int:id>", methods=["DELETE"])
def remove_user(id):
    """
    remove user by id endpoint
    :parameters:
        id

    :returns:
        a json with the following keys:
            - message
    """
```

- `update_user()`
```py
@app.route("/update_user", methods=["PUT"])
def update_user():
    """
    update user endpoint
    :parameters:
        a json with the following keys:
            - id
            - username
            - email

    :returns:
        a json with the following keys:
            - message
    """
```