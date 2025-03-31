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

class Sales(db.Model):
    __tablename__="Sales"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date=db.Column(db.Date, nullable=False)
    time=db.Column(db.Time, nullable=False)
    ticket_number=db.Column(db.Integer, nullable=False)
    article=db.Column(db.String(100), nullable=False)
    quantity=db.Column(db.Integer, nullable=False)
    unit_price=db.Column(db.Float, nullable=False)

    def to_json(self):
        return{
            "date": self.date.strftime("%Y-%m-%d"),
            "time": self.time.strftime("%H:%M:%S"),
            "ticket_number": self.ticket_number,
            "article": self.article,
            "quantity": self.quantity,
            "unit_price": self.unit_price
        }
    
