// Creamos un Arreglo con su Objeto
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
]

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...

const nuevoArray = carrito.map(function (producto) {
    return `Articulo: ${producto.nombre} Precio: $ ${producto.precio} `;
})


// ForEach
const nuevoArray2 = carrito.forEach(function (producto) {
    return `Articulo: ${producto.nombre} Precio: $ ${producto.precio} `;
})


// MOstramos los resultados donde la difenrecia entre 'map' y 'foreach'
console.log();
console.log("Reccorrido con el 'Map':");
console.table(nuevoArray);

console.log();
console.log("Reccorrido con el 'forEach':");
console.table(nuevoArray2); // No va tener Nada

