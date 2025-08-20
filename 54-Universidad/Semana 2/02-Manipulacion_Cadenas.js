// Manipulación de Cadenas

let nombre = 'Juan';
let edad = 25;

presentacion = `\nHola, mi nombre es ${nombre} y tengo ${edad} años. Mi Teléfono: 123-456-7890`; // Interpolación de cadenas
console.log(presentacion);

// Regular Expressions
let texto = presentacion;
let regex = /[A-Z]/g; // Expresión regular para buscar mayúsculas
let regexTelefono = /\d{3}-\d{3}-\d{4}/; // Expresión regular para buscar el número de teléfono
let telefono = texto.match(regexTelefono)[0]; // Buscar número de teléfono


console.log();

console.log('Buscar mayúsculas:', texto.match(regex)); // Buscar mayúsculas
console.log('Número de teléfono:', telefono); // Imprimir número de teléfono

console.log();

console.log('Reemplazar "Juan" por "Pedro":', texto.replace('Juan', 'Pedro')); // Reemplazar texto

console.log();
