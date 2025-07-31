// Creamos un Arreglo con su Objeto
const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Televisor', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
console.log();
console.log("---------------------------------------------");
console.log("Reccorrido con un 'for' de forma tradicional:");
console.log("---------------------------------------------");

for(let i = 0; i < carrito.length; i++ ){
    console.log( `Producto: ${ carrito[i].nombre } \tPrecio: $ ${carrito[i].precio} ` )
}


// ForEach
console.log();
console.log("----------------------------");
console.log("Reccorrido con el 'forEach':");
console.log("----------------------------");

carrito.forEach( function(producto) {
    console.log( `Producto: ${ producto.nombre } \tPrecio: $ ${producto.precio} ` )
})