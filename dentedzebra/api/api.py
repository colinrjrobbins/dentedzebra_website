from flask import Flask, jsonify, request
from flask_cors import CORS
from mail import Mail


app = Flask(__name__)
CORS(app)

@app.route('/api/mail', methods=['POST'])
def send_mail():
    try:
        mail_json = request.get_json()

        if not mail_json:
            return jsonify({'msg': 'Missing Mail JSON'}), 400        

        mailHandler = Mail(mail_json)
        json_return = mailHandler.prepareMail()
        if json_return == jsonify({'mail':'NO OPTION SELECTED'}):
            return json_return
        else:
            json_return = mailHandler.sendEmails()
            return json_return
    except Exception as e:
        return jsonify({'mail':"ERROR OCCURED" + str(e)}), 400