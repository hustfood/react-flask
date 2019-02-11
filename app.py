from flask import Flask, render_template
import os

app = Flask(__name__)
app.config.update(
	ENV='development' if os.name == 'nt' else 'production',
	DEBUG=True if os.name == 'nt' else False
)


@app.route('/one')
@app.route('/two')
def index():
	return render_template('test.html', platform=os.name+'1')


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8421)
