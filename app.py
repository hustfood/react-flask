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


@app.errorhandler(404)
def page_not_found(e):
	return render_template('404.html'), 404


@app.errorhandler(500)
def page_internal_error(e):
	return render_template('500.html'), 500


@app.route('/one')
@app.route('/two')
def index():
	return render_template('test.html', platform=os.name)
