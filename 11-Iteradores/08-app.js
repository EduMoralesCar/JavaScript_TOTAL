// for ... in va a iterar sobretodas las propiedades de un objeto, 
// pero primero veamos como recorrer un arreglo con objetos...

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }
];

console.log();
console.log("Datos del Carrito:");

for (let producto of carrito) { // reasignamos los valores de carrito a producto
    console.log(producto);
}



let automovil = {
    modelo: 'Camaro',
    motor: '6.0',
    anio: '1969',
    marca: 'Chevrolet'
}

console.log();
console.log("Datos del Automovil:");

for (let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}
