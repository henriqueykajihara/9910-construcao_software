import db as db
import sqlite3
from sqlite3 import Error

def create_datas(connection):
    print('Inserindo dados no banco!')
    query = """INSERT INTO users (name, username, password, email, type)
               VALUES ( :name, :username, :password, :email, :type )"""

    for task in default_users():
        connection.execute(query, task)
    connection.commit()


    query = """INSERT INTO payments (description, credit_debit)
               VALUES ( :description, :credit_debit)"""
    for task in default_payments():
        connection.execute(query, task)
    connection.commit()    
    
    query = """INSERT INTO ingredients (name, status, measurement_unit)
               VALUES ( :name, :status, :measurement_unit)"""
    for task in default_ingredients():
        connection.execute(query, task)
    connection.commit()    

    

def default_users():
    return [
    {   "id": 1,
        "name": "Henrique Negri Rodrigues",
        "username": "ra105480",
        "password": "123456",
        "email": "ra105480@uem.br",
        "type": "Student"

    },
    {   "id": 2,
        "name": "Bruno Pereira Soares",
        "username": "ra99909",
        "password": "123456",
        "email": "ra99909@uem.br",
        "type": "Student"

    },
    {   "id": 3,
         "name": "Janaina Maria Cera da Silva",
        "username": "ra115832",
        "password": "123456",
        "email": "ra115832@uem.br",
        "type": "Student"

    },
    {   "id": 4,
        "name": "Henrique Kajihara",
        "username": "ra78607",
        "password": "123456",
        "email": "ra78607@uem.br",
        "type": "Student"

    }
]

def default_payments():
    return [
    {   
        "description": 'Master Card',
        "credit_debit": 'Credito'
    },
    {   
        "description": 'Sodexo',
        "credit_debit": 'Credito'
    },
    {   
        "description": 'Ticket',
        "credit_debit": 'Credito'
    },
    {   
        "description": 'CooperCard - Alimentacao',
        "credit_debit": 'Credito'
    },
    {   
        "description": 'CooperCard - Refeicao',
        "credit_debit": 'Credito'
    },
    {   
        "description": 'Visa',
        "credit_debit": 'Credito'
    },
    {   
        "description": 'Visa',
        "credit_debit": 'Debito'
    }
    ]


def default_ingredients():
    return [ {
        'name': 'Cenoura',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Batata',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Tomate',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Bov. Patinho',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Bov. Carne Moida',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Frango Peito',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Sal',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Oleo de Soja',
        'status': 'Ativo',
        'measurement_unit': 'ML'
    },
    {
        'name': 'Cebola',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Porco Pernil',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Leite Condensado',
        'status': 'Ativo',
        'measurement_unit': 'LT'
    },
    {
        'name': 'Farinha',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Feijão',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    }
]

if __name__ == "__main__":
    
    connection = None
    try: 
        connection = sqlite3.connect(db.dbase())
        create_datas(connection)
        
    except Error as e:
        print(e)
    finally:
        if connection:
            connection.close()
            print('Dados inseridos com sucesso!')
    
    