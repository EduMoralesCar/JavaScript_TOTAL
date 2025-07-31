// Inicializamos el Arreglo Vacio
const carrito = [];

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

const producto_Teclado = {
    nombre: 'Teclado',
    precio: 50,
    anio_lanzamiento: 2020,
    color: 'Yellow'
}


// Inicializamos
let resultado1;

resultado1 = [...carrito, producto_Teclado, producto_Telefono, producto_monitor];


// Tabla de Resultado Aleatorio segun el Orden Agregado
console.log();
console.log("Tabla Aleatorio:");
console.table(resultado1);
console.log();

// Para añadir al inicio...
let resultado2;

resultado2 = [...carrito, producto_Teclado, producto_Telefono];


console.log("Agregamos al Inicio el Producto 'Monitor':");
resultado2 = [producto_monitor, ...resultado2];
console.table(resultado2);
console.log();



