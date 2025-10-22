import React, { useState } from 'react';
import './App.css';
import Saludo from './Components/Saludo';

function App() {

  // Definimos los estados para nombre, apellido y edad
  const [nombre] = useState("Juan");
  const [apellido] = useState("Pérez");
  const [edad] = useState(30);


  // state para frutas
  const frutas = ["Manzana", "Banana", "Cereza"];


  // state para frutas nombre de producto y precio
  const [productos] = useState([
    { nombre: "Manzana", precio: 1.2 },
    { nombre: "Banana", precio: 0.5 },
    { nombre: "Cereza", precio: 2.0 }
  ]);

  return (
    <div className="App">
      <h1>Hola Mundo desde App.js</h1>
      <Saludo nombre={nombre} apellido={apellido} edad={edad} />

      <hr />

      <div className="frutas container mt-4">
        <h2 className="text-center text-primary">Lista de Frutas:</h2>
        <ul className="list-group">
          {frutas.map((fruta, index) => (
            <li key={index} className="list-group-item">{fruta}</li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="productos container mt-4">
        <h2 className="text-center text-success">Lista de Productos:</h2>
        <ul className="list-group">
          {productos.map((producto, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {producto.nombre}
              <span className="badge bg-primary rounded-pill">${producto.precio.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
