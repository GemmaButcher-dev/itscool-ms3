import os
from flask import (
    Flask, flash, render_template, request, session, redirect, url_for, jsonify) 
from werkzeug.security import generate_password_hash, check_password_hash
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from pymongo import MongoClient, errors

if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


#  # MongoDB Atlas connection string
client = MongoClient(os.environ.get("MONGO_URI"))
db = client.school_slang  # Select the database


# Mongo URI for `mongo_connect`
MONGO_URI = os.environ.get("MONGO_URI")
DATABASE = "school_slang"
COLLECTION = "slangs"

# Revised mongo_connect function
def mongo_connect(url):
    try:
        conn = MongoClient(url)  # Directly use MongoClient here
        return conn
    except errors.ConnectionFailure as e:  # Use errors from pymongo
        print(f"Could not connect to MongoDB: {e}")

        
@app.route("/")
def hello():
    return "ItScool"


if __name__ == '__main__':
    app.run(debug=True)