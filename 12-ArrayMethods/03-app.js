// Array Method de .reduce
// Pero basicamente es tomar una gran cantidad de datos y entregar un resultado..
// Supongamos que tenemos nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar...




const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },
];

// Con un foreach

let total = 0;

carrito.forEach(producto => total += producto.precio);

console.log();
console.log('Precio Total con foreach:', total);


console.log(); // Salto de linea

// Puedes ver que si bien no se ve mal, podemos tenerlo todo en una sola linea con un .reduce

// total, actual
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio

console.log('Precio Total con reduce:', resultado);
console.log();