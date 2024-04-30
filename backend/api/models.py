from .config import db, app, jsonify
import hashlib
import secrets
from datetime import datetime


class User(db.Model):
    id = db.Column(db.TEXT, unique=True, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email
        }

    @staticmethod
    def generate_id():
        with app.app_context():
            ids = [result.id for result in User.query.with_entities(User.id).all()]

        seed = secrets.randbelow(1000)
        t = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        h = hashlib.sha256()
        h.update(f"{seed}{t}".encode("utf-8"))

        temp = h.hexdigest()
        if not temp in ids:
            return int(temp[:15], base=16)
        else:
            return User.generate_id()




class Blog(db.Model):
    __bind_key__ = 'blogs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "writer_id": self.writer_id,
            "title": self.title,
            "content": self.content
        }