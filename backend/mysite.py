from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def dict_factory(cursor, row):
    """Converte le righe in dizionari per una formattazione JSON più pulita."""
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route('/api/query1', methods=['GET'])
def get_query1():
    try:
        conn = sqlite3.connect('./users.db')  # Sostituisci con il tuo database
        conn.row_factory = dict_factory  # Usa la factory di dizionari
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users")  # La tua prima query
        results = cursor.fetchall()
        conn.close()
        return jsonify(results)
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Gestione errori

@app.route('/api/query2', methods=['GET'])
def get_query2():
    try:
        conn = sqlite3.connect('./users.db')
        conn.row_factory = dict_factory
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM items")  # La tua seconda query
        results = cursor.fetchall()
        conn.close()
        return jsonify(results)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/query3', methods=['GET'])
def get_query3():
    try:
        conn = sqlite3.connect('./users.db')
        conn.row_factory = dict_factory
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM indirizzi")  # La tua terza query
        results = cursor.fetchall()
        conn.close()
        return jsonify(results)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,host='localhost', port=8000)
