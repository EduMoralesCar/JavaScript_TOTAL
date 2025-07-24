// Podemos crear un objeto que agrupe toda esta información:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    modelo: "LaserJet Pro M15w",
    disponible: true
};


// Nos devolverá un arreglo con los keys del objeto
// Donde keys retorna la parte de la Izquierda del Objeto
console.log();
console.log("---------------------------------------");
console.log("Resultado de los Objetos con el 'Keys':");
console.log("---------------------------------------");
console.log(Object.keys(producto));


// Nos devolverá un arreglo con los valores del objeto
// Donde values retorna la parte de la Derecha del Objeto
console.log();
console.log("-----------------------------------------");
console.log("Resultado de los Objetos con el 'Values':");
console.log("-----------------------------------------");
console.log(Object.values(producto));


// Entries nos va a retornar una matriz de llaves y valores
// Donde entries retorna todo el objeto en pares
console.log();
console.log("------------------------------------------");
console.log("Resultado de los Objetos con el 'Entries':");
console.log("------------------------------------------");
console.log(Object.entries(producto));
console.log();