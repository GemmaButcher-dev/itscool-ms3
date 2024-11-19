import os
from flask import (
    Flask, flash, render_template, request, session, redirect, url_for, jsonify
)
from werkzeug.security import generate_password_hash, check_password_hash
from pymongo import MongoClient
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from functools import wraps


if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


# Initializing PyMongo
mongo = PyMongo(app)

# Decorator to restrict access to admin users
def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("role") == "admin":
            return f(*args, **kwargs)
        flash("You need to be an admin to access this page.")
        return redirect(url_for("home"))
    return decorated_function


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


@app.route('/admin_dashboard', methods=['GET', 'POST'])
def admin_dashboard():
    if 'user' not in session or session.get('role') != 'admin':  # Check if user is logged in as admin
        flash("You need to be an admin to access this page.")
        return redirect(url_for('login'))  # Redirect if not admin

    search_results = []
    search_query = None

    # Handle search functionality
    if request.method == 'POST' and 'search_query' in request.form:
        search_query = request.form.get('search_query')
        if search_query:
            search_results = mongo.db.slangs.find({
                "slang": {"$regex": search_query, "$options": "i"}
            })

        # Get all pending slangs (approved = False or not present)
    pending_slangs = mongo.db.slangs.find({"approved": {"$ne": True}})
        

    return render_template(
        'admin_dashboard.html', 
        pending_slang = pending_slangs,
        search_results = search_results,
        search_query = search_query,
    )


#  admin Approve slang route
@app.route("/admin/approve_slang", methods=["POST"])
@admin_required
def approve_slang():
    slang_id = request.form.get("slang_id")
    
    # Find the slang by its ID and update the 'approved' field to True
    result = mongo.db.slangs.update_one(
        {"_id": ObjectId(slang_id)},
        {"$set": {"approved": True}}
    )

    if result.modified_count > 0:
        flash("Slang approved successfully!", "success")
    else:
        flash("There was an issue approving the slang.", "error")

    # Redirect back to the admin dashboard after approval
    return redirect(url_for("admin_dashboard"))


#  admin delete  slang route
@app.route("/admin/delete_slang", methods=["POST"])
@admin_required
def delete_slang_admin():
    slang_id = request.form.get("slang_id")
    try:
        # Delete the slang based on its ID
        result = mongo.db.slangs.delete_one({"_id": ObjectId(slang_id)})
        if result.deleted_count > 0:
            flash("Slang deleted successfully!", "success")
        else:
            flash("Error deleting slang or slang not found.", "error")
    except Exception as e:
        flash(f"Error: {str(e)}", "error")
    
    return redirect(url_for("admin_dashboard"))


@app.route("/admin/add_slang", methods=["POST"])
@admin_required
def add_slang_admin():
    # Get form data
    slang_word = request.form.get("slang").lower()
    definition = request.form.get("definition").lower()
    age = request.form.get("age").lower()
    type = request.form.get("type").lower()

    # Create the new slang document to insert into MongoDB
    new_slang = {
        "slang": slang_word,
        "definition": definition,
        "age": age,
        "type": type,
        "approved": False  # unapproved by default
    }

    try:
        # Insert new slang into MongoDB collection
        mongo.db.slangs.insert_one(new_slang)
        flash("New slang added successfully! Pending approval.", "success")
    except Exception as e:
        flash(f"Error adding slang: {str(e)}", "error")

    # Redirect back to the admin dashboard after adding the slang
    return redirect(url_for("admin_dashboard"))


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
            "password": generate_password_hash(request.form.get("password")),
            "role": "user"  # Default role is 'user'
        }
        mongo.db.users.insert_one(signup)

        #put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Signup Successfull!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("signup.html")


# Login route
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        
        # Check if the user exists and if the password is correct
        if existing_user and check_password_hash(
            existing_user["password"], request.form.get("password")):
            
            # Save user information in session
            session["user"] = request.form.get("username").lower()
            session["role"] = existing_user.get("role", "user")  # Default to "user" if no role is set
            
            # Check if the user is an admin
            if session["role"] == "admin":
                flash(f"Welcome to the admin dashboard, {session['user']}!")
                return redirect(url_for("admin_dashboard"))  # Redirect to admin dashboard
            
            # Redirect to user dashboard/profile for non-admin users
            flash(f"Welcome, {session['user']}!")
            return redirect(url_for("home", username=session["user"]))
        
        flash("Incorrect Username and/or Password")
    return render_template("login.html")


@app.route("/dashboard/<username>", methods=["GET", "POST"])
def profile(username):
    #grab session user's username from db
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    
    if session["user"]:
        return render_template("dashboard.html", username=username)

    return redirect(url_for("login"))


# Add slang route
@app.route("/add_slang", methods=["GET", "POST"])
def add_slang():
    if request.method == "POST":
        slang = request.form.get("slang").lower()
        definition = request.form.get("definition").lower()
        age = request.form.get("age").lower()
        type = request.form.get("type").lower()
        new_doc = {
            "slang": slang,
            "definition": definition,
            "age": age,
            "type": type,
            "approved": False  # New slang is unapproved by default
        }
        mongo.db.slangs.insert_one(new_doc)
        flash("New slang added successfully! Pending approval.", "success")
    return render_template("add_slang.html")


# General delete slang route (accessible by all users)
@app.route("/delete_slang", methods=["POST"], endpoint="user_delete_slang")
def delete_slang_user():
    slang_word = request.form.get("slang").lower()  # Get slang word from form
    try:
        # Find the slang in the database by name and delete it
        result = mongo.db.slangs.delete_one({"slang": slang_word})
      
        if result.deleted_count > 0:
            flash(f"The slang '{slang_word}' has been deleted successfully!", "success")
        else:
            flash(f"Slang '{slang_word}' not found!", "error")

    except Exception as e:
        flash(f"Error: {str(e)}", "error")  # Handle any database errors

    return render_template("delete_slang_form")  # Show the delete slang form


# Route to render the delete slang form page
@app.route("/delete_slang_form", methods=["GET"])
def delete_slang_form():
    return render_template("delete_slang.html")


@app.route("/logout")
def logout():
    #remove user from session cookie
    flash("You have been logged out!")
    session.pop("user", None)
    session.pop("role", None)
    return redirect(url_for("login"))


# error handling /404 route
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
