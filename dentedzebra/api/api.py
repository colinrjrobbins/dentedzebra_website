import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
load_dotenv()

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

        receiptMessage = MIMEMultipart('alternative')
        receiptMessage['Subject'] = 'Thank You! Your email has been recieved!'
        receiptMessage['To'] = sender_email
        receiptMessage['From'] = EMAIL
        receiptText = 'You are the best! As a small business we really appreciate you.\n\n' + \
                      'We are just sending this to let you know that we generally get back within 24 hours and will likely ask'+\
                      ' a few more questions just to make sure we are understanding exactly what your looking for before we begin'+\
                      'the digital design.\n\n'+\
                      'Cheers,\nColin Robbins\nLead Product Design and Creator\nDentedZebra Speakers'
        textReceiptAttach = MIMEText(receiptText,'plain')
        receiptMessage.attach(textReceiptAttach)

        try:
            with smtplib.SMTP_SSL(SMTP_SERVER,port=port,context=context) as server:
                server.login(EMAIL,PASSWORD)
                server.sendmail(from_addr=EMAIL,to_addrs=EMAIL,msg=message.as_bytes())
                server.sendmail(from_addr=EMAIL,to_addrs=sender_email,msg=receiptMessage.as_bytes())
                server.quit()
        except Exception as e:
            return jsonify({'mail':'ERROR IN SEND ' + str(e)}), 400

        finally:
            return jsonify({'mail':"SENT"}), 200
    except Exception as e:
        return jsonify({'mail':"ERROR OCCURED" + str(e)}), 400