// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir los elementos al Carrito
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

const producto_Mouse = {
    nombre: 'Mouse',
    precio: 30,
    anio_lanzamiento: 2021,
    color: 'Gray'
};

const producto_Audifonos = {
    nombre: 'Audífonos',
    precio: 80,
    anio_lanzamiento: 2019,
    color: 'White'
};

const producto_Laptop = {
    nombre: 'Laptop',
    precio: 1200,
    anio_lanzamiento: 2022,
    color: 'Silver'
};

const producto_Tablet = {
    nombre: 'Tablet',
    precio: 350,
    anio_lanzamiento: 2023,
    color: 'Red'
}

// Agregamos
carrito.push(producto_Tablet);
carrito.push(producto_Mouse);
carrito.push(producto_Audifonos);
carrito.push(producto_Laptop);
carrito.push(producto_Telefono);
carrito.push(producto_monitor);



// Añadir al Inicio del carrito...
const producto_Teclado = {
    nombre: 'Teclado',
    precio: 50,
    anio_lanzamiento: 2020,
    color: 'Yellow'
}
carrito.unshift(producto_Teclado); // Para agregar al inicio utilizamos el 'unshift'

// Mostramos la Tabla de Productos
console.log();
console.log("Tabla de Productos:");
console.table(carrito);
console.log();



// Eliminación de un producto de un Arreglo...
// Eliminar el Primer Elemento
console.log("Eliminamos el Primer Producto:")
carrito.shift();
console.table(carrito);
console.log();

// Eliminar ultimo Elemento
console.log("Eliminamos el Ultimo Producto:")
carrito.pop();
console.table(carrito);
console.log();

// Eliminar un producto especifico
console.log("Eliminamos el Producto 'Laptop':")
carrito.splice(3, 3);
console.table(carrito);
console.log();

// Eliminar productos de un punto a otro punto
console.log("Eliminamos dos productos:")
carrito.splice(0, 2);
console.table(carrito);
console.log();
