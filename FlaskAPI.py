from flask import Flask, jsonify, request
import Script_v0_0

app = Flask(__name__)

# Rota para listar todos os funcionários (GET)
@app.route('/funcionarios', methods=['GET'])
def chamaFuncionarios():
    try:
        return jsonify(Script_v0_0.dados)
    except:
        return jsonify({'message': 'Erro ao fazer request.', 'erro': 404}), 404

# Rota para obter detalhes de um funcionário específico (GET)
@app.route('/funcionario/<int:id>', methods=['GET'])
def chamaFuncionario(id):
    try:
        funcionarioID = Script_v0_0.dados['funcionarios'][f'{id}']
   
        return jsonify(funcionarioID)
    except:
        return jsonify({'message': 'Erro ao consultar funcionario.', 'erro': 404}), 404
    
# Rota para adicionar um novo funcionário (POST)
@app.route('/funcionarios', methods=['POST'])
def addFuncionario():
    try:
        novoFuncionario = {
            'id': len(Script_v0_0.dados['funcionarios']) + 1,
            'nome': request.json['nome'],
            'idade': request.json['idade']
        }
    
        Script_v0_0.dados['funcionarios'].append(novoFuncionario)
        return jsonify(novoFuncionario), 201
    except:
        return jsonify({'message': 'Erro ao adicionar funcionario.', 'erro': 404}), 404
    
# Rota para atualizar os detalhes de um funcionário (PUT)
@app.route('/funcionario/<int:id>', methods=['PUT'])
def atualizarFuncionario(id):
    try:
        funcionarioID = Script_v0_0.dados['funcionarios'][f'{id}']
        funcionarioID['nome'] = request.json['nome']
        funcionarioID['idade'] = request.json['idade']

        return jsonify(funcionarioID)
    except:
        return jsonify({'message': 'Erro ao consultar funcionario.', 'erro': 404}), 404

# Rota para excluir um funcionario (DELETE)
@app.route('/funcionario/<int:id>', methods=['DELETE'])
def deletaFuncionario(id):
    try:
        funcionarioID = Script_v0_0.dados['funcionarios'][f'{id}']
        Script_v0_0.dados['funcionarios'].remove(funcionarioID)

        return jsonify({'message': 'funcionario excluído'})
    except:
        return jsonify({'message': 'Erro ao consultar funcionario.', 'erro': 404}), 404

if __name__ == '__main__':
    #debug=True permite que erros do Python apareçam na página da web.
    app.run(debug=True)
