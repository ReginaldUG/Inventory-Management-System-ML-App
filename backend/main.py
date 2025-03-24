from config import app, db
from flask import jsonify
from models import Prediction

#   Creating the route to retreive the predictions
@app.route("/predictions", methods=["GET"])
def get_predictions():
    salespredicitons = Prediction.query.all()
    json_pred = list(map(lambda x: x.to_json(), salespredicitons))
    return jsonify({"salespredictions": json_pred})


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)