from .config import *
from .models import User


@app.route("/")
def hello():
    return ""

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
    print(users_json)
    return {"users": [users_json]}, 200

def run():
    with app.app_context():
        db.create_all()

    app.run(debug=True)