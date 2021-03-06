from datetime import date
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost", "*"])

@app.route('/')
def index():
  return 'Backend is healthy'


@app.route('/hello_from_backend')
def hello_from_backend():
  print('backend called')
  return {"Hello":["Hello", "From", "Backend"]}


@app.route('/api/date')
def get_current_date():
  today = date.today()
  return {'date': today.strftime("%B %d, %Y")}

if __name__ == '__main__':
  app.run(debug=False, host='0.0.0.0')