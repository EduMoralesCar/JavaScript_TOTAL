
// 1. Declarar dos variables numéricas: a = 10 y b = 5
const a = 10;
const b = 5;

console.log(`a = ${a}`);
console.log(`b = ${b}\n`);

// 2. Calcular y mostrar en consola las operaciones matemáticas
console.log("=== OPERACIONES MATEMÁTICAS ===");

// La suma de a y b
const suma = a + b;
console.log(`La suma de a y b: ${a} + ${b} = ${suma}`);

// La resta de a y b
const resta = a - b;
console.log(`La resta de a y b: ${a} - ${b} = ${resta}`);

// La multiplicación de a y b
const multiplicacion = a * b;
console.log(`La multiplicación de a y b: ${a} * ${b} = ${multiplicacion}`);

// La división de a y b
const division = a / b;
console.log(`La división de a y b: ${a} / ${b} = ${division}`);

// El módulo (resto) de a dividido por b
const modulo = a % b;
console.log(`El módulo (resto) de a dividido por b: ${a} % ${b} = ${modulo}\n`);

// 3. Declarar una variable de tipo string: texto = "JavaScript Avanzado"
const texto = "JavaScript Avanzado";

console.log("=== VARIABLE STRING ===");
console.log(`texto = "${texto}"\n`);

// 4. Mostrar en consola las operaciones con strings
console.log("=== OPERACIONES CON STRINGS ===");

// La longitud del string
console.log(`La longitud del string: ${texto.length}`);

// El string en mayúsculas
console.log(`El string en mayúsculas: ${texto.toUpperCase()}`);

// El string en minúsculas
console.log(`El string en minúsculas: ${texto.toLowerCase()}`);

// El substring desde el índice 0 hasta el 10 (exclusivo)
console.log(`El substring desde el índice 0 hasta el 10: "${texto.substring(0, 10)}"`);

console.log("\n=== FIN DEL PROBLEMA 2 ===");