// for ... of

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
]

console.log();
console.log("Datos de Pendiente:");

for (let pendiente of pendientes) { // reasignamos los valores de pendientes a pendiente
    console.log(pendiente);
}

console.log();
console.log("Datos del Carrito:");

for (let producto of carrito) { // reasignamos los valores de carrito a producto
    console.log(producto);
}