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
@app.route("/index")
def home():


# Sign-up route
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == "POST":
        #check if username already exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("username already exists")
            return redirect(url_for("signup"))

        signup = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(signup)

        #put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower(),
        flash("Signup Successfull!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("signup.html")

if __name__ == '__main__':
    app.run(debug=True)