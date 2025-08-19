// Manejo de Cadenas

let texto = "Hola, JavaScript!";

console.log();
console.log(texto); // Imprimir cadena

console.log('Longitud de la cadena:', texto.length); // Longitud de la cadena
console.log('Caracter en la posición 0:', texto.charAt(0)); // Primer carácter
console.log();
console.log("Devuelve el indice de la Primera aparicion de 'JavaScript:'", texto.indexOf("JavaScript")); // Buscar subcadena

console.log('\nConvertir a mayúsculas:', texto.toUpperCase()); // Convertir a mayúsculas
console.log('Convertir a minúsculas:', texto.toLowerCase()); // Convertir a minúsculas

console.log();
console.log('Extracción de subcadenas de la posición 0 a 4:', texto.substring(0, 4));
console.log();