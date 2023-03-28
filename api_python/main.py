import db as db
import datetime
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


@app.route('/signup', methods=['POST'])
def signup():

    name = request.json['name']   
    username = request.json['username']   
    password = request.json['password']
    email = request.json['email']
    type_user = request.json['type']

    if db.user_name_exists(username):
        return make_response(jsonify({'Usuário já cadastrado!'}), 400)
    
    db.create_user(name, username, password, email, type_user)
    return make_response(
        jsonify( mensagem = 'Usuário cadastrado com sucesso!')
    )

#******************************************************************************
#          HISTORY
#******************************************************************************
@app.route('/history', methods=['POST'])
def new_meal():
    transaction_id = request.json['id']
    menu_id = request.json['menu_id']
    #if db.user_exists(user_id):



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

#******************************************************************************
#          USERS
#******************************************************************************



#******************************************************************************
def main():
    db.create_database(db.dbase())
    app.run("0.0.0.0", 3001, debug=True)


if __name__ == "__main__":
    
    main()
    