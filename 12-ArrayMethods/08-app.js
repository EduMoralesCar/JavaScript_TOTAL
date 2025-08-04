const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

console.table(meses);

console.log(); // Salto de linea

// spread operador con arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const producto = { producto: 'Disco duro', precio: 300 };

const carrito1 = [...carrito, producto];

console.log();
console.log(carrito1);