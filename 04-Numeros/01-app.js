// Ejemplo con Numeros

const valor1 = 5;
const valor2 = 10;
const valor3 = 15;
const suma = valor1 + valor2 + valor3;
const resta = valor3 - valor2;
const multiplicacion = valor1 * valor2;
const division = valor3 / valor1;

// Imprimir resultados
console.log();
console.log("Operaciones con Números:");
console.log("-------------------------");
console.log(`El valor 1 es: ${valor1}`);
console.log(`El valor 2 es: ${valor2}`);
console.log(`El valor 3 es: ${valor3}`);
console.log("-------------------------");
console.log("Resultados:");
console.log("-------------------------");
console.log(`La suma: ${valor1} + ${valor2} + ${valor3} = ${suma}`);
console.log(`La resta: ${valor3} - ${valor2} = ${resta}`);
console.log(`La multiplicación: ${valor1} * ${valor2} = ${multiplicacion}`);
console.log(`La división: ${valor3} / ${valor1} = ${division}`);
console.log("-------------------------");


// Otra manera de crear numeros
const numero1 =  new Number(20); // Usando el constructor Number
const numero2 =  new Number(30); 
const sumaNumeros = numero1 + numero2;

// Imprimir resultados de objetos Number
console.log();
console.log("Operaciones con Objetos Number:");
console.log("-------------------------");
console.log(`El Numero 1 es: ${numero1}`);
console.log(`El Numero 2 es: ${numero2}`);
console.log("-------------------------");
console.log("Operaciones con Objetos Number:");
console.log("-------------------------");
console.log(`La suma de objetos Number: ${numero1} + ${numero2} = ${sumaNumeros}`); // Suma de objetos Number
console.log("-------------------------");
