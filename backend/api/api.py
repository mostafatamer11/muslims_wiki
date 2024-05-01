from .config import *
from .models import User


@app.route("/")
def hello():
    """
    A simple hello world endpoint
    """
    return jsonify({"message": "Hello, World!"})


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
    id = User.generate_id()
    print(id)
    username = request.json.get("username")
    email = request.json.get("email")

    new_user = User(id=id, username=username, email=email)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": f"failure!:\n{str(e)}"}), 400

    return jsonify({"message": "success!"}), 201


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
    users = User.query.all()
    users_json = list(map(lambda x: x.to_json(), users))
    return jsonify({"message": "success!", "users": users_json}), 200


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
    user = User.query.filter_by(id=id).first()
    if user:
        return jsonify({"message": "success!", "user": user.to_json()}), 200
    else:
        return jsonify({"message": "failure!", "user": None}), 404


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
    user = User.query.filter_by(id=id).first()
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "success!"}), 200
    else:
        return jsonify({"message": "failure!"}), 404


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
    id = request.json.get("id")
    username = request.json.get("username")
    email = request.json.get("email")

    user = User.query.filter_by(id=id).first()
    user.username = username
    user.email = email

    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": f"failure!:\n{str(e)}"}), 400

    return jsonify({"message": "success!"}), 201


def run():
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=5000)