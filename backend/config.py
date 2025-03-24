from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


#   Confing info
DB_CONFIG = {
    "host":"database-1.cmvq2kr2ldmn.eu-west-1.rds.amazonaws.com",
    "user": "admin",
    "password":"adminpassword",
    "database":"PredictionsDB"
}

#   THE CONNECTION STRING
DATABASE_URI = f"mysql+mysqlconnector://{DB_CONFIG['user']}:{DB_CONFIG['password']}@{DB_CONFIG['host']}/{DB_CONFIG['database']}"

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)