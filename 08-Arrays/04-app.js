// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto_monitor = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 500,
    anio_lanzamiento: 2015,
    color: 'black'

}

const producto_Telefono = {
    nombre: 'Celular',
    precio: 500,
    anio_lanzamiento: 2018,
    color: 'Blue'

}

carrito.push(producto_monitor);
carrito.push(producto_Telefono);


// Añadir al Inicio del carrito...

const producto_Teclado = {
    nombre: 'Teclado',
    precio: 50,
    anio_lanzamiento: 2020,
    color: 'Yellow'
}
carrito.unshift(producto_Teclado); // Para agregar al inicio utilizamos el 'unshift'

// Mostramos la Tabla
console.table(carrito);