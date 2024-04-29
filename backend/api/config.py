from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)

# CORS(app, origins=["http://example.com", "https://example.com"])
CORS(app)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///zikr_bits/backend/api/data/users.db"

app.config["SQLALCHEMY_BINDS"] = {
    "blogs": "sqlite:///zikr_bits/backend/api/data/blogs.db",
}

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)