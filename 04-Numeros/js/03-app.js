// El Orden en que se ejecutan las operaciones en JavaScript es igual que en la escuela

let resultado;

console.log();
console.log("---------------------------------------------");
console.log("Operaciones con el Orden de las Operaciones:");
console.log("---------------------------------------------");
resultado = 20 + 30 * 2; // Multiplicación primero, luego suma
console.log(`El resultado de 20 + 30 * 2 es: ${resultado}`); // 80

resultado = (20 + 30) * 2; // Paréntesis primero, luego multiplicación
console.log(`El resultado de (20 + 30) * 2 es: ${resultado}`); // 100

// 20% de descuento en un carrito de compras

console.log();
console.log("-----------------------");
console.log("Cálculo de descuento:");
console.log("-----------------------");
const precioOriginal = 100; // Precio original del producto
const descuento = 20; // Porcentaje de descuento
resultado = precioOriginal - (precioOriginal * (descuento / 100)); // Aplicando el descuento

// Imprimir el resultado del descuento
console.log(`El precio después de aplicar un descuento del ${descuento}% es: ${resultado}`); // 80
console.log();
