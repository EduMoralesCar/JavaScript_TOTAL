// Union de dos objetos
// Primer objeto de producto
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true,
    modelo: "LaserJet Pro M15w"
};

// Segundo Objeto de especificaciones
const especificaciones = {
    color: "blanco",
    conectividad: "USB, Wi-Fi",
    garantia: "1 año"
}


console.log();
console.log("----------------");
console.log("Objeto producto:");
console.log("----------------");
console.log(producto);

console.log();
console.log("------------------------");
console.log("Objeto especificaciones:");
console.log("------------------------");
console.log(especificaciones);
console.log();


// Realizamos la unión de los 2 objetos
const resultado = Object.assign(producto, especificaciones);

console.log("---------------------------------------");
console.log("Resultado de la unión de los 2 objetos:");
console.log("---------------------------------------");
console.log(resultado);
console.log();


// Hay otra manera de hacer con el Spread Operador o Rest Operator lo mismo que el anterior
const union = { ...producto, ...especificaciones }

console.log("---------------------------------------");
console.log("Resultado de la unión de los 2 objetos:");
console.log("---------------------------------------");
console.log(union);
console.log();