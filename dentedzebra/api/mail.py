from dotenv import load_dotenv
import os
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import jsonify

class Mail:
    def __init__(self, mail_json):
        self.__contactType = mail_json.get('contactType')
        self.__name = mail_json.get('name')
        self.__sender_email = mail_json.get('email')
        self.__roughBudget = mail_json.get('roughBudget')
        self.__conceptDescription = mail_json.get('conceptDescription')
        self.__materials = mail_json.get('materials')
        load_dotenv()
        self.EMAIL = os.environ.get('EMAIL_USERNAME')
        self.PASSWORD = os.environ.get('EMAIL_PASSWORD')
        self.SMTP_SERVER = os.environ.get('SMTP_SERVER')

    def prepareMail(self):
        self.__context = ssl.create_default_context()
        self.__message = MIMEMultipart('alternative')
        self.__message['To'] = self.EMAIL
        self.__message['From'] = self.__sender_email

        if self.__contactType == 'NEWBUILD':
            self.__message["Subject"] = "NEW BUILD - " + self.__name
            text = "Contact Name: " + self.__name +"\n" +\
                   "Email: " + self.__sender_email + "\n" + \
                   "Rough Budget: $" + self.__roughBudget + "\n" + \
                   "Concept: " + self.__conceptDescription + "\n" + \
                   "Materials: " + self.__materials + ""
            textAttach = MIMEText(text,"plain")
            self.__message.attach(textAttach)
        elif self.__contactType == 'REPAIR':
            self.__message["Subject"] = "REPAIR/UPGRADE - " + self.__name
            text = "Contact Name: " + self.__name + "\n" +\
                   "Email: " + self.__sender_email + "\n" + \
                   "Issues/Repairs: " + self.__conceptDescription +""
            textAttach = MIMEText(text,"plain")
            self.__message.attach(textAttach)
        elif self.__contactType == 'DONATE':
            self.__message["Subject"] = "DONATE - " + self.__name
            text = "Contact Name: " + self.__name + "\n" +\
                   "Email: " + self.__sender_email + "\n" + \
                   "Materials to Donate: " + self.__conceptDescription +""
            textAttach = MIMEText(text,"plain")
            self.__message.attach(textAttach)
        else:
            return jsonify({'mail':'NO OPTION SELECTED'}), 400
        
        self.__receiptMessage = MIMEMultipart('alternative')
        self.__receiptMessage['Subject'] = 'Thank You! Your email has been recieved!'
        self.__receiptMessage['To'] = self.__sender_email
        self.__receiptMessage['From'] = self.EMAIL
        self.__receiptText = 'You are the best! As a small business we really appreciate you.\n\n' + \
                      'We are just sending this to let you know that we generally get back within 24 hours and will likely ask'+\
                      ' a few more questions just to make sure we are understanding exactly what your looking for before we begin'+\
                      'the digital design.\n\n'+\
                      'Cheers,\nColin Robbins\nLead Product Design and Creator\nDentedZebra Speakers'
        self.__textReceiptAttach = MIMEText(self.__receiptText,'plain')
        self.__receiptMessage.attach(self.__textReceiptAttach)

    def sendEmails(self):
        __port=465
        try:
            with smtplib.SMTP_SSL(self.SMTP_SERVER,port=__port,context=self.__context) as server:
                server.login(self.EMAIL,self.PASSWORD)
                server.sendmail(from_addr=self.EMAIL,to_addrs=self.EMAIL,msg=self.__message.as_bytes())
                server.sendmail(from_addr=self.EMAIL,to_addrs=self.__sender_email,msg=self.__receiptMessage.as_bytes())
                server.quit()
        except Exception as e:
            return jsonify({'mail':'ERROR IN SEND ' + str(e)}), 400

        finally:
            return jsonify({'mail':"SENT"}), 200