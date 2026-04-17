from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

alunos = [
    {"id": 1, "nome": "Falizeu", "Média": 6.7},
    {"id": 2, "nome": "Takahashi", "Média": 9.6},
    {"id": 3, "nome": "Koma", "Média": 8.7},
]

@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

app.run(port=3000, debug=True)