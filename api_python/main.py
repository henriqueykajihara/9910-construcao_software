import db as db
import popula as pop
import sqlite3
from flask import Flask, make_response, jsonify, request

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
#******************************************************************************
#          AUTH
#******************************************************************************
@app.route('/auth', methods=['POST'])
def login():

    username = request.json['username']   
    password = request.json['password']
   
    stored_password = db.get_stored_password(username)

    if stored_password == password:
        return make_response(jsonify({'ok'}), 200)
    else:
        return make_response(jsonify({'message': 'Usuário ou senha inválidos.'}), 401)

#******************************************************************************
#          HISTORY
#******************************************************************************
@app.route('/historico', methods=['POST'])
def new__history():
    user_id = request.json[ 'user_id']
    user_receiver_id = request.json[ 'user_receiver_id']
    payment_id = request.json[ 'payment_id']
    date = request.json[ 'date']
    #date_time =  datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    value = request.json[ 'value']
    ticket_quantity = request.json[ 'ticket_quantity']
    type = request.json[ 'type']

    db.new_history(user_id, user_receiver_id, payment_id, date, value, ticket_quantity, type)
    return make_response(jsonify({'Histórico inserido!'}), 200)

@app.route('/historico', methods=['GET'])
def get_history():
    
    result = db.get_history()
    if result:
        histories = list()
        for history in result:
            histories.append( {  
                                  'id': history[0],
                                  'value': history[5],
                                  'date': history[4],
                                  'type ': history[7]
                              } )
            
    else:
        histories = [ {'Nenhum histórico encontrado'}]            

    return make_response(jsonify(histories))
#******************************************************************************
#          Payment
#******************************************************************************
@app.route('/payment', methods=['POST'])
def new_payment():

    return make_response( jsonify({'mensagem': 'Pagamento cadastrado'}) , 200)
#******************************************************************************
#          INGREDIENTS
#******************************************************************************

#******************************************************************************
#          MENU
#******************************************************************************

#******************************************************************************
#          SNACK
#******************************************************************************

#******************************************************************************
#          TRANSACTIONS
#******************************************************************************
@app.route('/transaction', methods=['POST'])
def new_transaction():
    user_id = request.json['user_id']
    menu_id = request.json['menu_id']
    date = request.json['date']
    ticket_quantity = request.json['ticket_quantity']
    db.new_transaction(user_id, menu_id, date, ticket_quantity)
    return make_response( jsonify({'mensagem': 'Transação concluída'}) , 200)


@app.route('/transaction', methods=['GET'])
def get_transaction():
    user_id = request.json['user_id']
    menu_id = request.json['menu_id']
    date = request.json['date']
    ticket_quantity = request.json['ticket_quantity']
    db.new_transaction(user_id, menu_id, date, ticket_quantity)
    return make_response( jsonify({'mensagem': 'Transação concluída'}) , 200)


#******************************************************************************
#          USERS
#******************************************************************************
@app.route('/signup', methods=['POST'])
def signup():

    name = request.json['name']   
    username = request.json['username']   
    password = request.json['password']
    email = request.json['email']
    type_user = request.json['type']

    if db.user_name_exists(username):
        return make_response(jsonify({'Usuário já cadastrado!'}), 400)
    
    db.new_user(name, username, password, email, type_user)
    return make_response( jsonify( {'mensagem': 'Usuário cadastrado com sucesso!'} ), 200 )


#******************************************************************************
def main():
    db.create_database(db.dbase())
    connection = sqlite3.connect(db.dbase())
    
    pop.create_datas(connection)
    app.run("localhost", 3001, debug=True)


if __name__ == "__main__":
    
    main()
    