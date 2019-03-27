from flask import Flask, render_template
import os

app = Flask(__name__)
app.config.update(
	SECRET_KEY='food',
	ENV='development' if os.name == 'nt' else 'production',
	DEBUG=True if os.name == 'nt' else False
)

from utils import socketio
socketio.init_app(app)


@app.route('/one')
@app.route('/two')
def index():
	return render_template('test.html', platform=os.name)
