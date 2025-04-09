from config import app, db
from flask import jsonify
from models import Prediction, Sales
from sqlalchemy import func
from datetime import timedelta

@app.route("/")
def index():
    return jsonify(status=200, message='OK')

#   Creating the route to retreive the predictions
@app.route("/predictions", methods=["GET"])
def get_predictions():
    salespredicitons = Prediction.query.all()
    json_pred = list(map(lambda x: x.to_json(), salespredicitons))
    return jsonify({"salespredictions": json_pred})

@app.route("/sales/daily", methods=["GET"])
def get_last_7_days_sales():

    # Get latest date in the Sales table
    latest_date = db.session.query(func.max(Sales.date)).scalar()

    last_7_days = latest_date - timedelta(days=7)

    salestrends = (
        db.session.query(
            Sales.date, 
            func.sum(Sales.quantity).label("total_sales")
        )
        .filter(Sales.date >= last_7_days) 
        .group_by(Sales.date)
        .order_by(Sales.date)
        .all()
    )

    json_sales = [
        {"date": row.date.strftime("%Y-%m-%d"), "total_sales": row.total_sales}
        for row in salestrends
    ]

    return jsonify({"salestrends": json_sales})

@app.route("/sales/best-sellers", methods=["GET"])
def get_best_sellers():
    # Find the latest available date in the dataset
    latest_date = db.session.query(func.max(Sales.date)).scalar()

    if not latest_date:
        return jsonify({"bestsellers": []})  # No data available

    last_7_days = latest_date - timedelta(days=7)

    bestsellers = (
        db.session.query(
            Sales.article,
            func.sum(Sales.quantity).label("total_quantity")
        )
        .filter(Sales.date >= last_7_days)
        .group_by(Sales.article)
        .order_by(func.sum(Sales.quantity).desc())
        .limit(5)
        .all()
    )

    results = [{"article": row.article, "total_quantity": row.total_quantity} for row in bestsellers]
    return jsonify({"bestsellers": results})

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
        
    app.run(debug=True)