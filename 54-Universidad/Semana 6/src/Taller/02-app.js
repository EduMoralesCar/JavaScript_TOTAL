/**
Ejercicio 2: Filtrar Números Pares
Escribe una función filtrarPares que toma un array de números y un callback.
La función debe filtrar los números pares del array y llamar al
callback con un array que contenga solo los números pares.
 */

function filtrarPares(array, callback) {
    const numPares = array.filter(numero => numero % 2 === 0);
    callback(numPares);
};

function filtrarImpar(array, callback) {
    const numImpares = array.filter(numero => numero % 2 != 0);
    callback(numImpares);
};

// Uso de la función
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filtrarPares(numeros, (numPares) => {
    console.log('Numeros Pares:', numPares);
});

filtrarImpar(numeros, (numImpares) => {
    console.log('Numeros Impares:', numImpares);
});