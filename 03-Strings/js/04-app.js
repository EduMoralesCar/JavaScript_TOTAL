// Veamos algunos métodos existentes en los strings o cadenas de Texto:
const producto = '        Monitor 20 Pulgadas      '; 

console.log();
console.log("'", producto, "'");
console.log("Cantidad de letras:", producto.length); // Muestra la cantidad de letras de la cadena de texto

// Eliminar espacios al inicio y al final
console.log();
console.log("Eliminar espacios al inicio y al final:");
console.log("'", producto.trimStart(), "'"); // Elimina los espacios al inicio de la cadena
console.log("'", producto.trimEnd(), "'"); // Elimina los espacios al final de la cadena
console.log("'", producto.trim(), "'"); // Elimina los espacios al inicio y al final de la cadena

// Los metodos en JavaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log();
console.log("Encadenar métodos:");
console.log(producto.trimStart().trimEnd()); // Elimina los espacios al inicio y al final de la cadena

// Un metodo (que ya tiene el otro) es trim que hace lo mismo que trimStart y trimEnd
console.log();
console.log("Usando trim:");
console.log(producto.trim()); // Elimina los espacios al inicio y al final de la cadena
console.log();