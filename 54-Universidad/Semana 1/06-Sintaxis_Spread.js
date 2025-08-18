// sintaxis spread en Objetos
const producto = {
    nombre: "Camiseta",
    precio: 20,
    disponible: true,
}

const copiaProducto = {
    ...producto
}

console.log('Original del Producto:');
console.table(producto); // Imprime el objeto original
console.log('Copia del Producto:');
console.table(copiaProducto);


// Combinar Objetos

const producto1 = {
    nombre: "Pantalón",
    precio: 30,
    disponible: false,
}

const producto2 = {
    nombre: "Chaqueta",
    precio: 50,
    disponible: true,
}

const productosCombinados = {
    ...producto1,
    ...producto2
}

console.log('\nCombinar Objetos:');
console.log('Producto 1:');
console.table(producto1);

console.log('Producto 2:');
console.table(producto2);

console.log('Productos Combinados:');
console.table(productosCombinados);
