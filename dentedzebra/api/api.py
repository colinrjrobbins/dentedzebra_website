import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__, static_folder='../client/build')
CORS(app)

EMAIL = os.environ.get('EMAIL_USERNAME')
PASSWORD = os.environ.get('EMAIL_PASSWORD')
SMTP_SERVER = os.environ.get('SMTP_SERVER')

@app.route('/api/mail', methods=['POST'])
def send_mail():
    try:
        mail_json = request.get_json()

        if not mail_json:
            return jsonify({'msg': 'Missing Mail JSON'}), 400        

        smtp_server = SMTP_SERVER
        port = 465

        context = ssl.create_default_context()

        contactType = mail_json.get('contactType')
        name = mail_json.get('name')
        sender_email = mail_json.get('email')
        roughBudget = mail_json.get('roughBudget')
        conceptDescription = mail_json.get('conceptDescription')
        materials = mail_json.get('materials')

        message = MIMEMultipart('alternative')
        message['To'] = EMAIL
        message['From'] = sender_email

        if contactType == 'NEWBUILD':
            message["Subject"] = "NEW BUILD - " + name
            text = "Contact Name: " + name +"\n" +\
                   "Email: " + sender_email + "\n" + \
                   "Rough Budget: $" + roughBudget + "\n" + \
                   "Concept: " + conceptDescription + "\n" + \
                   "Materials: " + materials + ""
            textAttach = MIMEText(text,"plain")
            message.attach(textAttach)
        elif contactType == 'REPAIR':
            message["Subject"] = "REPAIR/UPGRADE - " + name
            text = "Contact Name: " + name + "\n" +\
                   "Email: " + sender_email + "\n" + \
                   "Issues/Repairs: " + conceptDescription +""
            textAttach = MIMEText(text,"plain")
            message.attach(textAttach)
        elif contactType == 'DONATE':
            message["Subject"] = "DONATE - " + name
            text = "Contact Name: " + name + "\n" +\
                   "Email: " + sender_email + "\n" + \
                   "Materials to Donate: " + conceptDescription +""
            textAttach = MIMEText(text,"plain")
            message.attach(textAttach)
        else:
            return jsonify({'mail':'NO OPTION SELECTED'}), 400

        try:
            with smtplib.SMTP_SSL(SMTP_SERVER,port=port,context=context) as server:
                server.login(EMAIL,PASSWORD)
                server.sendmail(from_addr=EMAIL,to_addrs=EMAIL,msg=message.as_bytes())
                server.quit()
        except Exception as e:
            return jsonify({'mail':'ERROR IN SEND ' + str(e)}), 400

        finally:
            return jsonify({'mail':"SENT"}), 200
    except Exception as e:
        return jsonify({'mail':"ERROR OCCURED" + str(e)}), 400