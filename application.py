import os

from flask import Flask, render_template, url_for
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

class Channel:
    def __init__(self, name, messages = []):
        self.name = name
        self.messages = messages

cs50x = Channel(name= "cs50x")
cs50w = Channel(name= "cs50w")

channels = []
channels.append(cs50x)
channels.append(cs50w)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/channels")
def channels():
    channels = channels
    return jsonify({"success": True, "channels": channels}) 

