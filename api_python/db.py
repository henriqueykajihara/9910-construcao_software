import sqlite3
import bcrypt
from sqlite3 import Error

#******************************************************************************
def connect(db_file):
    return sqlite3.connect(dbase())

#******************************************************************************
def dbase():
    return 'uniticket.db'

#******************************************************************************
def create_database(db_file):
    
    connection = None
    try: 
        connection = connect(db_file)
        create_tables(connection)
        
    except Error as e:
        print(e)
    finally:
        if connection:
            connection.close()

#******************************************************************************
def create_tables(connection):
    
    for query in table_list():
        connection.execute(query)

#******************************************************************************
def save_data(query, values):
    conn = connect()
    conn.execute(query,values)
    conn.commit()

#******************************************************************************
def table_list():
    return [ """CREATE TABLE IF NOT EXISTS payments ( id INTEGER PRIMARY KEY, description TEXT, payment_method TEXT) """,
             """CREATE TABLE IF NOT EXISTS history ( id INTEGER PRIMARY KEY, user_id INTEGER, menu_id INTEGER, user_receiver_id INTEGER, payment_id INTEGER, date_time DATETIME, value REAL, ticket_quantity INTEGER, type TEXT, FOREIGN KEY(transaction_id) REFERENCES transactions(id), FOREIGN KEY(menu_id) REFERENCES menu(id) ) """,
             """CREATE TABLE IF NOT EXISTS users( id INTEGER PRIMARY KEY, name TEXT, username TEXT, password TEXT, cpf TEXT, email TEXT, type TEXT, tickets_avaible INTEGER) """,
             """CREATE TABLE IF NOT EXISTS transactions ( id INTEGER PRIMARY KEY, user_id INTEGER, menu_id INTEGER, date_time DATETIME, ticket_quantity INTEGER, FOREIGN KEY(user_id) REFERENCES user(id), FOREIGN KEY(menu_id) REFERENCES menu(id))""",
             """CREATE TABLE IF NOT EXISTS menu ( id INTEGER PRIMARY KEY, meal_period TEXT, date DATETIME) """,
             
             
             """CREATE TABLE IF NOT EXISTS snack ( id INTEGER PRIMARY KEY, user_id INTEGER, snack_id INTEGER, date DATETIME, meal_period TEXT, FOREIGN KEY(user_id) REFERENCES user(id), FOREIGN KEY(snack_id) REFERENCES snack(id) ) """,
             """CREATE TABLE IF NOT EXISTS recipe( id INTEGER PRIMARY KEY, name TEXT) """,
             """CREATE TABLE IF NOT EXISTS recipe_ingredients ( id INTEGER PRIMARY KEY, ingredient_id NUMBER, recipe_id NUMBER, measure NUMBER, FOREIGN KEY(ingredient_id) REFERENCES ingredient(id), FOREIGN KEY(recipe_id) REFERENCES recipe(id) ) """,
             """CREATE TABLE IF NOT EXISTS ingredients ( id INTEGER PRIMARY KEY, name TEXT, status TEXT, measurement_unit TEXT) """
            ]

#******************************************************************************
def encript_passwd(passwd):
    salt = bcrypt.gensalt()
    password = passwd.encode('utf-8')
    return bcrypt.hashpw(password, salt)

#******************************************************************************
def get_stored_password(username):
    conn = connect(dbase())
    cursor = conn.cursor()
    cursor.execute("""
        SELECT password FROM users WHERE username = ?;
    """, (username,))
    result = cursor.fetchone()
    if result:
        return result[0]
    else:
        return None
 
#******************************************************************************
def user_name_exists(username):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT * FROM users WHERE username = ?;
    """, (username,))
    result = cursor.fetchone()

    return result

#******************************************************************************
def user_exists(user_id):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT * FROM users WHERE id = ?;
    """, (user_id,))
    result = cursor.fetchone()

    return result

#******************************************************************************
def create_user(name, username, password, email, type_user):
    query = """INSERT INTO users (name, username, password, email, type)
               VALUES ( :name, :username, :password, :email, :type )"""
    
    values = {
        "name": name,
        "username": username,
        "password": password,
        "email": email,
        "type": type_user
    }
    
    save_data(query,values)
    
#******************************************************************************
def new_payment(description, credit_debit):
    query = """INSERT INTO payment (description, credit_debit)
               VALUES ( :description, :credit_debit )"""
    values ={ 'description': description,
                               'credit_debit': credit_debit }
    save_data(query,values)

#******************************************************************************
def new_history(transaction_id, menu_id, date_time):
    query = """INSERT INTO history(transaction_id, menu_id, date)
               VALUES (:transaction_id, :menu_id, :date)"""
    values = { 'transaction_id':transaction_id,
                                'menu_id': menu_id,
                                'date': date_time }
    save_data(query,values)