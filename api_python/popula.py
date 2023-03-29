import db as db
import sqlite3
from sqlite3 import Error

def create_datas(connection):
    print('Inserindo dados no banco!')

    query = """INSERT INTO payments (description, payment_method)
               VALUES ( :description, :payment_method)"""
    for task in default_payments():
        connection.execute(query, task)
    
    query = """INSERT INTO ingredients (name, status, measurement_unit)
               VALUES ( :name, :status, :measurement_unit)"""
    for task in default_ingredients():
        connection.execute(query, task)  

    query = """INSERT INTO users ( name, username, password, cpf, email, type, tickets_avaible) 
               VALUES ( :name, :username, :password, :cpf, :email, :type, :tickets_avaible)"""
    for task in default_users():
        connection.execute(query, task)
    
    query = """INSERT INTO menu (meal_period, date) 
               VALUES (:meal_period, :date) """
    for task in default_menu():
        connection.execute(query, task)

    query = """INSERT INTO menu_itens (ingredient_id, menu_id) 
               VALUES (:ingredient_id, :menu_id) """
    for task in default_menu_itens():
        connection.execute(query, task)

    query = """INSERT INTO transactions (user_id, menu_id, date, ticket_quantity) 
               VALUES (:user_id, :menu_id, :date, :ticket_quantity) """
    for task in default_transactions():
        connection.execute(query, task)    
 
    query = """INSERT INTO history ( user_id, user_receiver_id, payment_id, date, value, ticket_quantity, type)
               VALUES ( :user_id, :user_receiver_id, :payment_id, :date, :value, :ticket_quantity, :type)"""
    for task in default_history():
        connection.execute(query, task)   

    connection.commit()
    connection.close()

    

def default_users():
    return [
    {   "id": 1,
        "name": "Henrique Negri Rodrigues",
        "username": "ra105480",
        "password": "123456",
        "email": "ra105480@uem.br",
        "type": "Student", 
        "cpf": "00000000000",
        "tickets_avaible": 10

    },
    {   "id": 2,
        "name": "Bruno Pereira Soares",
        "username": "ra99909",
        "password": "123456",
        "email": "ra99909@uem.br",
        "type": "Student",
        "cpf": "00000000000",
        "tickets_avaible": 5

    },
    {   "id": 3,
         "name": "Janaina Maria Cera da Silva",
        "username": "ra115832",
        "password": "123456",
        "email": "ra115832@uem.br",
        "type": "Student",
        "cpf": "00000000000",
        "tickets_avaible": 3

    },
    {   "id": 4,
        "name": "Henrique Kajihara",
        "username": "ra78607",
        "password": "123456",
        "email": "ra78607@uem.br",
        "type": "Student",
        "cpf": "00000000000",
        "tickets_avaible": 12

    }
]

def default_payments():
    return [
    {   
        "description": 'Master Card',
        "payment_method": 'Credito'
    },
    {   
        "description": 'Sodexo',
        "payment_method": 'Credito'
    },
    {   
        "description": 'Ticket',
        "payment_method": 'Credito'
    },
    {   
        "description": 'CooperCard - Alimentacao',
        "payment_method": 'Credito'
    },
    {   
        "description": 'CooperCard - Refeicao',
        "payment_method": 'Credito'
    },
    {   
        "description": 'Visa',
        "payment_method": 'Credito'
    },
    {   
        "description": 'Visa',
        "payment_method": 'Debito'
    }
    ]


def default_ingredients():
    return [ {
        'name': 'Alface',
        'status': 'Ativo',
        'measurement_unit': 'UN'
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
        'name': 'Acelga',
        'status': 'Ativo',
        'measurement_unit': 'UN'
    },
    {
        'name': 'Strogonoff de Bov',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Coxa de frango assada',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Strogonoff de frango',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Batata frita',
        'status': 'Ativo',
        'measurement_unit': 'ML'
    },
    {
        'name': 'Arroz',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Porco Pernil',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Pernil de Porco',
        'status': 'Ativo',
        'measurement_unit': 'LT'
    },
    {
        'name': 'Frango Xadrez',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Laranja',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Bisteca suína acebolada',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Bisteca acebolada',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    },
    {
        'name': 'Iscas com mandioca',
        'status': 'Ativo',
        'measurement_unit': 'KG'
    }
]

def default_history():
    return [
    {
        'user_id':1,
        'user_receiver_id': 0,
        'payment_id': 1,
        'date': '2023-03-27 12:00:21',
        'value': 4.00,
        'ticket_quantity': 1,
        'type': 'alimentação'
    },
    {
        'user_id': 1,
        'user_receiver_id': 0,
        'payment_id': 4,
        'date': '2023-03-28 12:51:21',
        'value': 4.00,
        'ticket_quantity': 2,
        'type': 'alimentação'
    },
    {
        'user_id': 1,
        'user_receiver_id': 0,
        'payment_id': 6,
        'date': '2023-03-28 12:51:21',
        'value': 4.00,
        'ticket_quantity': 1,
        'type': 'transfência'
    },
    {
        'user_id': 1,
        'user_receiver_id':0,
        'payment_id': 8,
        'date': '2023-03-29 18:51:21',
        'value': 4.00,
        'ticket_quantity': 1,
        'type': 'transfência'
    }
]

def default_menu():
    return[
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-24 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-24 18:00:00'
    },
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-25 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-25 18:00:00'
    },
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-26 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-26 18:00:00'
    },
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-27 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-27 18:00:00'
    },
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-28 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-28 18:00:00'
    },
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-29 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-29 18:00:00'
    },
    {
        'meal_period': 'ALMOÇO',
        'date': '2023-03-30 11:30:00'
    },
    {
        'meal_period': 'JANTAR',
        'date': '2023-03-30 18:00:00'
    }
    ]

def default_menu_itens():
    return [
    {
        'ingredient_id': 1,
        'menu_id': 1
    },
        {
        'ingredient_id': 1,
        'menu_id': 2
    },
        {
        'ingredient_id': 1,
        'menu_id': 3
    },
        {
        'ingredient_id': 1,
        'menu_id': 4
    },
        {
        'ingredient_id': 1,
        'menu_id': 5
    },
        {
        'ingredient_id': 1,
        'menu_id': 6
    },
        {
        'ingredient_id': 1,
        'menu_id': 7
    },
        {
        'ingredient_id': 1,
        'menu_id': 8
    },
        {
        'ingredient_id': 1,
        'menu_id': 9
    },
        {
        'ingredient_id': 1,
        'menu_id': 10
    }
    ]

def default_transactions():
    return [
    {
        'user_id': 1,
        'menu_id': 1,
        'date': '2023-03-27 12:05:21',
        'ticket_quantity': 1
    },
    {
        'user_id': 2,
        'menu_id': 2,
        'date': '2023-03-28 12:05:21',
        'ticket_quantity': 1
    },
    {
        'user_id': 3,
        'menu_id': 2,
        'date': '2023-03-28 12:05:21',
        'ticket_quantity': 1
    },
    {
        'user_id': 3,
        'menu_id': 2,
        'date': '2023-03-29 12:05:21',
        'ticket_quantity': 1
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