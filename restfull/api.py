from flask import Flask, jsonify
import sqlite3

conn = sqlite3.connect(r"restfull\data.db")
cursor = conn.cursor()

# cursor.execute('''CREATE TABLE IF NOT EXISTS users
#                   (id INTEGER PRIMARY KEY, name TEXT, email TEXT)''')

app = Flask(__name__)

@app.route("/post/<string:post_id>", methods=["POST"])
def test_post(post_id):
    return jsonify({"message": f"This is a POST request to /post/{post_id}"})

if __name__ == "__main__":
    app.run(debug=True)