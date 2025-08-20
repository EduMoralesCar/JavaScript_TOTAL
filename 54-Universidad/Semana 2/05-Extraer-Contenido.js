// Extraer Contenido
// Definición de variables
let texto = "Hola, mi nombre es Juan y tengo 25 años.";

console.log("\nTexto original:\n", texto);
console.log();
let regexNombre = /nombre es (\w+)/; // Expresión regular para buscar el nombre
let regexEdad = /tengo (\d+) años/; // Expresión regular para buscar la edad

let nombreExtraido = texto.match(regexNombre)[1]; // Extraer el nombre
let edadExtraida = texto.match(regexEdad)[1]; // Extraer la edad

console.log('Extracción con Expresiones Regulares:');
console.log('Nombre extraído:', nombreExtraido);
console.log('Edad extraída:', edadExtraida);
console.log();

// Extracción con el Substring
let nombreExtraidoSubstring = texto.substring(texto.indexOf("nombre es ") + 10, texto.indexOf(" y tengo")); // Extraer el nombre
let edadExtraidaSubstring = texto.substring(texto.indexOf("tengo ") + 6, texto.indexOf(" años")); // Extraer la edad

console.log('Extracción con Substring:');
console.log('Nombre extraído (substring):', nombreExtraidoSubstring);
console.log('Edad extraída (substring):', edadExtraidaSubstring);
console.log();