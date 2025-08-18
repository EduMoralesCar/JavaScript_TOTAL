// Metodo Numericos

console.log('Métodos Numéricos:');
console.log('Número Máximo:', Math.max(1, 2, 3, 4, 5)); // Devuelve 5
console.log('Número Mínimo:', Math.min(1, 2, 3, 4, 5)); // Devuelve 1
console.log('Número Aleatorio:', Math.random()); // Devuelve un número aleatorio entre 0 y 1
console.log('Número Aleatorio entre 1 y 10:', Math.floor(Math.random() * 10) + 1); // Devuelve un número aleatorio entre 1 y 10


console.log(); // Salto de línea


// Metodo toFixed
console.log('Número con 2 decimales:', (Math.PI).toFixed(2)); // Devuelve 3.14

// Metodo toPrecision
console.log('Número con 5 dígitos de precisión:', (Math.PI).toPrecision(5)); // Devuelve 3.1416

// Metodo isNaN
console.log('Es NaN:', isNaN(NaN)); // Devuelve true
console.log('Es NaN:', isNaN(5)); // Devuelve false

// Metodo toExponential
console.log('Número en notación exponencial:', (Math.PI).toExponential(2)); // Devuelve 3.14e+0