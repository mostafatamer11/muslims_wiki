from .config import *
from .models import User, Blog



def run():
    with app.app_context():
        db.create_all()

    user = User(username='John Doe', email="hi@hi.com", id=8)
    db.session.add(user)
    db.session.commit()

    app.run(debug=True)