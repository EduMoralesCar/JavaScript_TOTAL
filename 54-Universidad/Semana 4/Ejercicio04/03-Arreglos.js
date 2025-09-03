// Arreglos en javascript
// Creando un arreglo
let frutas = ["Manzana", "Banana", "Cereza"];

// Accediendo a elementos del arreglo
console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Banana
console.log(frutas[2]); // Cereza

console.log(); // salto de linea

// Modificando elementos del arreglo
frutas[1] = "Pera";
console.log('Arreglo modificado:');
console.log(frutas[1]); // Pera

console.log(); // salto de linea


// Metodos Utiles en Arreglos
// Ejemplo 1: Agregar una fruta al final del arreglo
let listaFrutas = ["manzana", "banana"];
listaFrutas.push("pera");

console.log('Metodo push:');
console.log("Frutas actualizadas:", listaFrutas); // ["manzana", "banana", "pera"]


console.log(); // salto de linea


// Ejemplo 2: Eliminar la última fruta del arreglo
let frutasDisponibles = ["manzana", "banana", "pera"];
let frutaRemovida = frutasDisponibles.pop();

console.log('Metodo pop:');
console.log("Frutas restantes:", frutasDisponibles); // ["manzana", "banana"]
console.log("Fruta eliminada:", frutaRemovida); // "pera"


console.log(); // salto de linea


// Ejemplo 3: Multiplicar cada número por 2
let listaNumeros = [1, 2, 3, 4, 5];
let numerosMultiplicados = listaNumeros.map(n => n * 2);

console.log('Metodo map:');
console.log("Números por 2:", numerosMultiplicados); // [2, 4, 6, 8, 10]


console.log(); // salto de linea


// Ejemplo 4: Eliminar la primera fruta del arreglo
let frutasEnStock = ["manzana", "banana", "pera"];
let frutaInicial = frutasEnStock.shift();

console.log('Metodo shift:');
console.log("Frutas restantes:", frutasEnStock); // ["banana", "pera"]
console.log("Fruta eliminada:", frutaInicial); // "manzana"


console.log(); // salto de linea


// Ejemplo 5: Filtrar solo los números pares
const conjuntoNumeros = [1, 2, 3, 4, 5];
const numerosPares = conjuntoNumeros.filter(n => n % 2 === 0);

console.log('Metodo filter:');
console.log("Números pares:", numerosPares); // [2, 4]
