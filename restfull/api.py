from flask import Flask, jsonify
import sqlite3


app = Flask(__name__)

@app.route('/post/<int:post_id>', methods=["POST"])
def test_post(post_id):
    return jsonify({"message": f"This is a POST request to /post/{post_id}"})

if __name__ == '__main__':
    app.run(debug=True)