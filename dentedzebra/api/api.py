import smtpd
from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_folder='../client/build')
CORS(app)

@app.route('/mail', method=['POST'])
def send_mail():
    return {'mail':"SENT"}