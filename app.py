import os
from flask import (
    Flask, flash, render_template, request, session, redirect, url_for, jsonify) 
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient, errors
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from pymongo import MongoClient, errors

if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


# Initializing PyMongo
mongo = PyMongo(app)


@app.route("/")
@app.route("/index")
def home():
    # Retrieve all slangs
    slangs = mongo.db.slangs.find().sort("slang")  # Sort alphabetically

    # Group slangs by their first letter
    grouped_slangs = {}
    for slang in slangs:
        first_letter = slang['slang'][0].upper()
        grouped_slangs.setdefault(first_letter, []).append(slang)

    return render_template("index.html", grouped_slangs=grouped_slangs)


# Route for filtering by a specific letter
@app.route("/letter/<letter>")
def slangs_by_letter(letter):
    # Retrieve slangs starting with the specified letter
    slangs = mongo.db.slangs.find({"slang": {"$regex": f"^{letter}", "$options": "i"}})
    return render_template("index.html", letter=letter, slangs=slangs)


# Search route
@app.route("/search")
def search():
    query = request.args.get("q")
    if query:
        # Retrieve slangs matching the search query
        slangs = mongo.db.slangs.find({"slang": {"$regex": query, "$options": "i"}})
    else:
        slangs = []
    return render_template("index.html", query=query, slangs=slangs)


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
        session["user"] = request.form.get("username").lower()
        flash("Signup Successfull!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("signup.html")


#login route
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        #check if username exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            #ensure hashed password matches user input
            if check_password_hash(
                existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(
                    request.form.get("username")))
                return redirect(url_for(
                    "profile", username=session["user"]))
            else:
                #invalid password
                flash("Incorrect Username and/or Password")
                return redirect(url_for("login"))
        
        else:
            #username doesnt exist
            flash("Incorrect Username and/or Password")
            return redirect(url_for("login"))
            
    return render_template("login.html")


@app.route("/dashboard/<username>", methods=["GET", "POST"])
def profile(username):
    #grab session user's username from db
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    
    if session["user"]:
        return render_template("dashboard.html", username=username)

    return redirect(url_for("login"))



@app.route("/logout")
def logout():
    #remove user from session cookie
    flash("You have been logged out!")
    session.pop("user")
    return redirect(url_for("login"))


if __name__ == '__main__':
    app.run(debug=True)