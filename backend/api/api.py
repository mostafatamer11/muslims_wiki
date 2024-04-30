from .config import *
from .models import User


@app.route("/")
def hello():
    return jsonify({"message": "Hello, World!"})

@app.route("/create_user", methods=["POST"])
def create_user():
    id = request.json.get("id")
    username = request.json.get("username")
    email = request.json.get("email")

    new_user = User(id=id, username=username, email=email)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "User created!"}), 201

@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    users_json = list(map(lambda x: x.to_json(), users))
    return jsonify({"users": [users_json]}), 200


@app.route("/user/<int:id>", methods=["GET"])
def get_user(id):
    user = User.query.filter_by(id=id).first()
    if user:
        return jsonify({"user": user.to_json()}), 200
    else:
        return jsonify({"message": "User not found!"}), 404


@app.route("/remove_user/<int:id>", methods=["DELETE"])
def remove_user(id):
    user = User.query.filter_by(id=id).first()
    if user:
        db.session.delete(user)
        db.session.commit()


@app.route("/update_user", methods=["PUT"])
def update_user():
    id = request.json.get("id")
    username = request.json.get("username")
    email = request.json.get("email")

    user = User.query.filter_by(id=id).first()
    user.username = username
    user.email = email


def run():
    with app.app_context():
        db.create_all()

    app.run(debug=True, port=5000)