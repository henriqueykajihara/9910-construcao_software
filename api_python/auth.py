import sqlite3
from sqlite3 import Error

def create_database(db_file):
    connection = None
    try: 
        connection = sqlite3.connect(db_file)
    except Error as e:
        print(e)
    finally:
        if connection:
            connection.close()

def authenticate_user(user, password, type):
    return user, password, type

