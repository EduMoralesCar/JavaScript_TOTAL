// Valores no definidos
let numero;
console.log();
console.log("---------------------------------------------");
console.log("Valores No Definidos y Null:");
console.log("---------------------------------------------");

// Imprimir el valor no definido
console.log(numero); // undefined
console.log(typeof numero); // undefined
console.log("---------------------------------------------");

// Ahora con el caso de null
let numero1 = null;
console.log(numero1); // null
console.log(typeof numero1); // object (esto es un bug de JavaScript)
console.log("---------------------------------------------");

// Realizando una comparación entre null y undefined
console.log("Comparando null y undefined:");
console.log(`null == undefined: ${numero1 == numero}`); // true (igualdad)
console.log("---------------------------------------------");
console.log();