//  Math es parte de la ventana global y contiene propiedades y métodos para constantes matemáticas y funciones matemáticas.
let resultado;

console.log();
console.log("Operaciones con Math:");
resultado = Math.PI; // Constante PI
console.log(`El valor de PI es: ${resultado}`);

console.log()
resultado = Math.E; // Constante E
console.log(`El valor de E es: ${resultado}`);

console.log();
resultado = Math.round(2.5); // Redondea al entero más cercano
console.log(`El valor redondeado de 2.5 es: ${resultado}`);

console.log();
resultado = Math.ceil(2.1); // Redondea hacia arriba
console.log(`El valor redondeado hacia arriba de 2.1 es: ${resultado}`);

console.log();
resultado = Math.sqrt(16); // Raíz cuadrada
console.log(`La raíz cuadrada de 16 es: ${resultado}`);

console.log();
resultado = Math.abs(-5); // Valor absoluto
console.log(`El valor absoluto de |-5| es: ${resultado}`);

console.log();
resultado = Math.min(5, 10, 15); // Mínimo de un conjunto de números
console.log(`El valor mínimo entre 5, 10 y 15 es: ${resultado}`);

console.log();
resultado = Math.max(5, 10, 15); // Máximo de un conjunto de números
console.log(`El valor máximo entre 5, 10 y 15 es: ${resultado}`);

console.log();
resultado = Math.random(); // Número aleatorio entre 0 y 1
console.log(`Un número aleatorio entre 0 y 1 es: ${resultado}`);

console.log();
resultado = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 99
console.log(`Un número aleatorio entre 0 y 99 es: ${resultado}`);
console.log();