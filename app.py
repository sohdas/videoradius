from flask import Flask, url_for, render_template, request

app = Flask(__name__)
api_key = 'AIzaSyDLTU2Zxrz_34aqHdvvESPMbVb54YnlAfc'

@app.route('/')
def index():
    return render_template('index.html', api_key = api_key)

