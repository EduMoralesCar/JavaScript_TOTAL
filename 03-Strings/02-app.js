// Veamos algunos métodos existentes en los strings o cadenas de Texto:
const producto = "Monitor 20 Pulgadas";
const precio = 12.90;

// Tipo de Dato
console.log("Tipo de dato de producto y precio:");
console.log(typeof producto, ":", producto); // Muestra el tipo de dato de la variable producto
console.log(typeof precio, ":", precio); // Muestra el tipo de dato de la variable precio
console.log();
console.log("'",producto,"'", "tiene:", producto.length, "letras"); // Muestra la cantidad de letras de la cadena de texto

// IndexOF
console.log();
console.log(producto.indexOf("Monitor")); // Devuelve la posición donde se encuentra "Monitor"
console.log(producto.indexOf("Tablet")); // Devuelve -1 porque "Tablet" no está en la cadena
console.log(producto.indexOf("Pulgadas")); // Devuelve la posición de "Pulgadas"

// Includes
console.log();
console.log(producto.includes("Monitor")); // Devuelve true porque "Monitor" está en la cadena
console.log(producto.includes("monitor")); // Devuelve false porque "monitor" no coincide con la capitalización

// Operaciones con cadenas
console.log();
const pelicula = "Rambo: Last Blood";
const tipo = pelicula.split(": "); // Divide la cadena en un array usando ": " como separador
console.log(tipo); // "Rambo: Last Blood"

