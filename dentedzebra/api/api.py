import smtpd
from flask import Flask

app = Flask(__name__)

@app.route('/mail')
def send_mail():
    return {'mail':"SENT"}