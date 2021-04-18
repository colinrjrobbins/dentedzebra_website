from flask import Flask, request
from flask import render_template, url_for
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__,
            static_folder="static",
            template_folder="templates")
app.wsgi_app = ProxyFix(app.wsgi_app)

@app.route('/')
def main():
    return render_template('index.html', title='DentedZebra Speakers')

@app.route('/process')
def process():
    return render_template('process.html', title='Process - DentedZebra')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html', title='Gallery - DentedZebra')

@app.route('/repairs')
def repairs():
    return render_template('repairs_upgrade.html', title='Repairs - DentedZebra')

@app.route('/about')
def about():
    return render_template('about.html', title='About - DentedZebra')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact - DentedZebra')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
