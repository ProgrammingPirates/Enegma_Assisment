from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:1234@localhost:9592/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class APIHit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    request_id = db.Column(db.String(50), nullable=False)
    request_type = db.Column(db.String(10), nullable=False)
    request_time = db.Column(db.DateTime, default=datetime.utcnow)
    payload = db.Column(db.Text, nullable=True)
    content_type = db.Column(db.String(50), nullable=True)
    ip_address = db.Column(db.String(50), nullable=False)
    os = db.Column(db.String(50), nullable=False)
    user_agent = db.Column(db.String(150), nullable=False)

@app.route('/track', methods=['POST'])
def track_api_hit():
    data = request.json
    api_hit = APIHit(
        request_id=data['requestId'],
        request_type=data['requestType'],
        request_time=datetime.strptime(data['requestTime'], '%Y/%m/%d %H:%M'),
        payload=data.get('payload', ''),
        content_type=data.get('contentType', ''),
        ip_address=data['ipAddress'],
        os=data['os'],
        user_agent=data['userAgent']
    )
    db.session.add(api_hit)
    db.session.commit()
    return jsonify({"message": "API hit tracked successfully!"}), 201

@app.route('/hits', methods=['GET'])
def get_api_hits():
    hits = APIHit.query.all()
    results = [
        {
            "id": hit.id,
            "requestId": hit.request_id,
            "requestType": hit.request_type,
            "requestTime": hit.request_time.strftime('%Y/%m/%d %H:%M'),
            "payload": hit.payload,
            "contentType": hit.content_type,
            "ipAddress": hit.ip_address,
            "os": hit.os,
            "userAgent": hit.user_agent
        } for hit in hits]
    return jsonify(results), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
