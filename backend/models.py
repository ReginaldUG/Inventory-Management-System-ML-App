from config import db

#   Defining our predictions model from config.py
class Prediction(db.Model):
    __tablename__= "Predictions"
    date=db.Column(db.Date, nullable=False, primary_key=True)
    article=db.Column(db.String(100), nullable=False, primary_key=True)
    quantity=db.Column(db.Integer, nullable=False)

    def to_json(self):
        return {
            "article": self.article,
            "date": self.date.strftime("%Y-%m-%d"),
            "quantity": self.quantity
    }

