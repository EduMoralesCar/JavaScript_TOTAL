// Ahora veremos los metodos como .replace, .slice y .repeat

// Replace
const producto = "Monitor 20 Pulgadas";
console.log(producto.replace(20, 24)); // Reemplaza "20" por "24" en la cadena
console.log(producto.replace("Pulgadas", "Pulgadas 4K")); // Reemplaza "Pulgadas" por "Pulgadas 4K"

// Slice te permite extraer una parte de la cadena
console.log();
console.log("Slice:");
console.log(producto.slice(0, 7)); // Extrae desde el índice 0 hasta el 7 (no incluye el 7)
console.log(producto.slice(8)); // Extrae desde el índice 8 hasta el final
console.log(producto.slice(-8)); // Extrae los últimos 8 caracteres de la cadena
console.log(producto.slice(2,1), "null"); // No extrae nada porque el inicio es mayor que el final

// Existe otro método similar llamado substring
console.log();
console.log("Substring:");
console.log(producto.substring(0, 7)); // Extrae desde el índice 0 hasta el 7 (no incluye el 7)
console.log(producto.substring(8)); // Extrae desde el índice 8 hasta el final
console.log(producto.substring(-8)); // No extrae nada porque el índice negativo no es válido
console.log(producto.substring(2, 1)); // No extrae nada porque el inicio es mayor que el final

// Repeat
console.log();
console.log("Repeat:");
console.log(producto.repeat(2)); // Repite la cadena 2 veces
console.log("Hola ".repeat(3)); // Repite "Hola " 3 veces
console.log("JavaScript ".repeat(5)); // Repite "JavaScript " 5 veces
console.log();
