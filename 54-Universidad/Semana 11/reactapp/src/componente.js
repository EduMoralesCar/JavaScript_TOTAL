import React, { useState } from 'react';

export default function Componente() {
    const [color, setColor] = useState(0);
    const [fontSize, setFontSize] = useState(22);

    const colores = ['red', 'green', 'blue', 'yellow', 'purple'];

    // Función para cambiar el color
    const cambiarColor = () => {
        const titulo = document.getElementById('titulo');
        const parrafo = document.getElementById('parrafo');
        const colorActual = colores[color];

        titulo.style.color = colorActual;
        parrafo.style.color = colorActual;

        document.getElementById('colorActual').innerHTML = `color actual: <strong>${colorActual}</strong>`;
        setColor((color + 1) % colores.length);
    };

    // Función para aumentar el tamaño de la fuente
    const aumentarTamanio = () => {
        const parrafo = document.getElementById('parrafo');
        if (fontSize < 32) {
            setFontSize(fontSize + 1);
            parrafo.style.fontSize = `${fontSize + 1}px`;
        }
    };

    // Función para disminuir el tamaño de la fuente
    const disminuirTamanio = () => {
        const parrafo = document.getElementById('parrafo');
        if (fontSize > 18) {
            setFontSize(fontSize - 1);
            parrafo.style.fontSize = `${fontSize - 1}px`;
        }
    };

    return (
        <div className="container border p-5">
            <h1 id="titulo" className="text-center p-4">Aplicación básica usando React.js</h1>
            <p id="parrafo" className="lead text-left" style={{ fontSize: `${fontSize}px` }}>Este texto y el título cambiarán de color al presionar el botón.</p>
            <div className="d-flex justify-content-start mt-3">
                <button className="btn btn-primary me-2" onClick={cambiarColor}>Cambiar color</button>
                <button className="btn btn-success me-2" onClick={aumentarTamanio}>Aumentar tamaño</button>
                <button className="btn btn-danger" onClick={disminuirTamanio}>Disminuir tamaño</button>
            </div>
            <p id="colorActual" className="text-center mt-3"><strong></strong></p>
            <p className="text-center mt-3">Tamaño de fuente actual: <strong>{fontSize}</strong>px</p>
        </div>
    );
}
