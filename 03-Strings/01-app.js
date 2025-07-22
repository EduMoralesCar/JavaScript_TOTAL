// 3 maneras de creacion de strings
const pelicula = "El Padrino"; // Usando comillas dobles
const duracion = String("1:45:00"); // Usando el constructor String
const genero = new String("Drama"); // Usando el constructor String con new

console.log(pelicula); // "El Padrino"
console.log(duracion); // "1:45:00"
console.log(genero); // "Drama"


// Aplicando el metodo de String
const frase = "Welcome to JavaScript";
const fraseMayus = frase.toUpperCase();
const fraseMinus = frase.toLowerCase();
console.log(fraseMayus); // "WELCOME TO JAVASCRIPT"
console.log(fraseMinus); // "welcome to javascript"