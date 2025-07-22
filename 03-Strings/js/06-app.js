// Repeat Te va a permitir repetir una cadena de texto:
console.log();

const producto = "Monitor 24'' ";
const texto = 'En promoción '.repeat(3); // Repite "En promoción" 3 veces

console.log(producto.repeat(3)); // Repite la cadena del producto 3 veces
console.log(producto.repeat(2.2)); // Repite la cadena del producto 2 veces (ignora la parte decimal)
console.log(`${producto} - ${texto}`); // Usa template literals para mostrar el producto y el texto repetido

// Split
console.log();
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // Divide la cadena en un array usando el espacio como separador

const hobbies = "Leer, Programar, Jugar, Estudiar";
console.log(hobbies.split(", ")); // Divide la cadena en un array usando ", " como separador

// Join
console.log();
const frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas.join(", ")); // Une los elementos del array en una cadena usando ", " como separador

