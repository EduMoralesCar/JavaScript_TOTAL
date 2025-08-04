// Bueno veamos otros iteradores que existen en JavaScript

// forEach
let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...


// Recorrer arreglo de objetos
const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }
];

console.log();
console.log("Agregaste:");


carrito.forEach(producto => {
    console.log(`${producto.id} : ${producto.producto}`);
});

// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda,
// el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach,
// si requieres crear un nuevo arreglo, sin duda el map sera mejor...