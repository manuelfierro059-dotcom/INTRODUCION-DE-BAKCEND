from flask import Flask
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # Conecta el frontend con Flask

# Ruta principal
@app.route("/")
def HolaFlask():
    return "<h1>¡Hola Flask!</h1><hr>"

# Ejercicio 1: Promedio de Notas
@app.route("/notas")
@app.route("/notas/<float:nota1>/<float:nota2>/<float:nota3>")
def notas(nota1=0, nota2=0, nota3=0):
    resultado = round ((nota1 * 30) / 100 + (nota2 * 30) / 100 + (nota3 * 40) / 100, 2)
    return f"<h1>La nota final es: {resultado}</h1><hr>"

# Ejercicio 2: Clasificación de Edad
@app.route("/edades")
@app.route("/edades/<int:edad>")
def edades(edad=0):
    if edad < 18:
        R = "menor de edad"
    elif edad < 60:
        R = "Adulto"
    else:
        R = "Adulto mayor"
    return f"<h1>La persona es: {R}</h1><hr>"

# Ejercicio 3: Arreglos Aleatorios con NumPy
@app.route("/arreglos")
@app.route("/arreglos/<int:valores>/<int:columnas>")
@app.route("/arreglos/<int:valores>/<int:columnas>/<int:filas>")
def arreglos(valores=1, columnas=1, filas=0):
    if filas == 0:
        arreglo = np.random.randint(valores, size=columnas)
    else:
        arreglo = np.random.randint(valores, size=(filas, columnas))
    return f"<h1>El arreglo aleatorio es: {arreglo}</h1><hr>"

if __name__ == '__main__':
    app.run(debug=True)