
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.log(); // Salto de linea

// Buscamos el indice de Abril Mendiante foreach
meses.forEach((mes, i) => {
    if (mes === 'Abril') {
        console.log('Encontramos el indice del mes de Abril:', i);
    }
});


// Buscamos el indice de Abril Mendiante el metodo findIndex
const indice = meses.findIndex(mes => mes === 'Abril');
console.log('Abril:', indice);


console.log(); // Salto de linea


// Objeto
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

// Encontrar un indice de un arreglo de Objetos

const indice1 = carrito.findIndex(producto => producto.precio === 200); // El precio de 100 nose encuentra en ninguno de los productos
console.log('Indice del producto del precio 200:', indice1); // retornara un la valor -1 si el precio no existe en el carrito
console.log(); // Salto de linea
