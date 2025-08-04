// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso

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


console.log(); // Salto de linea
console.table(meses);

// Comprobar si un valor existe en un arreglo
// En este caso, queremos sabe si el mes de Febrero, se encuentra en el carrito 
// podrías hacerlo con un foreach...

meses.forEach(mes => {
    if (mes === 'Enero') {
        console.log('Enero si existe...')
    }
})

console.log(); // Salto de linea

// También podrías utilizar el Array Method de .includes

const resultado = meses.includes('Julio'); // Julio No existe en el Table de Meses
console.log('Existe el mes de Julio:', resultado);


// En un arreglo de objetos se utiliza .some
const existe2 = meses.some(mes => mes === 'Febrero');
console.log('Existe el mes de febrero:', existe2);




// En el caso de un arreglo de objetos... .includes no es la mejor opción, 
// podrías utilizar uno llamado .some
console.log();
console.table(carrito);

const existe = carrito.some(producto => producto.nombre === 'Celular');
console.log('Existe el Producto Celular:', existe);
console.log();

