/**
Ejercicio 2: Filtrar Números Pares
Escribe una función filtrarPares que toma un array de números y un callback.
La función debe filtrar los números pares del array y llamar al
callback con un array que contenga solo los números pares.
 */

function filtrarPares(callback) {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numPares = lista.filter(lista => lista % 2 == 0);
    callback(numPares);
}

// Uso de la función
// filtrarPares (numPares => console.log('Numeros Pares:', numPares));
filtrarPares((numPares) => {
    console.log('Numeros Pares:', numPares);
})