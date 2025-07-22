// Veamos como concatenar o unir 2 textos o variables:
const producto = "Monitor 20 Pulgadas";
const precio = "12.90 USD";

// Concatenación con el operador +
console.log("Concatenación con el operador '+':");
const texto = "El producto " + producto + " tiene un precio de " + precio;  
console.log(texto); // Muestra el texto concatenado

// Concatenación con concat
console.log();
console.log("Concatenación con concat:");
console.log(producto.concat(" : En Descuento")); // Une "En descuento" al final de la cadena producto
console.log(producto.concat(" : ", precio)); // Une el precio al final de la cadena producto con un espacio

// Otras formas de concatenar:
console.log();
console.log("Otras formas de concatenar:");
console.log("Usando template literals:");
console.log(`El producto ${producto} tiene un precio de ${precio}`); // Usando template literals
console.log();
console.log("Usando string interpolation:");
console.log("El producto %s tiene un precio de %s", producto, precio); // Usando printf-style formatting (no es estándar en JavaScript, pero algunos entornos lo soportan)
console.log();
