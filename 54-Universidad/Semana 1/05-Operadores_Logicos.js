// Operadores Lógicos
let a = true;
let b = false;

console.log(a && b); // false (AND)
console.log(a || b); // true (OR)
console.log(!a); // false (NOT)

console.log();

// Sintaxis Spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinacion = [...arr1, ...arr2]; // Combina los dos arrays
let nuevaArreglo = [0, ...combinacion, 7, 8, 9]; // Crea un nuevo array con elementos adicionales

// Imprimir el array combinado
console.table(combinacion); // [1, 2, 3, 4, 5, 6]
console.table(nuevaArreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log();