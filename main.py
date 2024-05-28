#imporation des librairies nécessaires 
from flask import Flask, jsonify
import json

app = Flask(__name__)

# Récupération des données
with open('data.json', 'r') as file:
    data = json.load(file)

# Route 1 (récupérer tous les posts)    
@app.route('/posts', methods=['GET'])
def get_post_from_data():
    return jsonify(data)

# Route 2 (récupérer tous les posts pour un userId donné)    
@app.route('/posts/<int:userId>', methods=['GET'])
def get_post_by_user(userId):
    user_post = []
    for post in data:
        if post['userId'] == userId:
            user_post.append(post)
    if not user_post:
        return jsonify({"error": "User not found"}), 404 #Bonus
    return jsonify(user_post)

if __name__ == '__main__':
    app.run(debug=True)
