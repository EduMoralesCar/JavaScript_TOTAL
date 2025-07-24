// Boolean solo tiene dos valores: true o false

const boolean1 = true; // Valor booleano verdadero
const boolean2 = false; // Valor booleano falso

console.log();
console.log("---------------------------------------------");
console.log("Valores Booleanos:");
console.log("---------------------------------------------");
console.log(`Valor booleano 1: ${boolean1}`); // true
console.log(`Valor booleano 2: ${boolean2}`); // false
console.log();
console.log("---------------------------------------------");
console.log("tipo de datos Booleanos:");
console.log("---------------------------------------------");
console.log(`Tipo de dato de boolean1: ${typeof boolean1}`); // "boolean"
console.log(`Tipo de dato de boolean2: ${typeof boolean2}`); // "boolean"
console.log();

// Tambien se puede crear con la instancia new Boolean
const boolean3 = new Boolean(true); // Instancia de Boolean
console.log("---------------------------------------------");
console.log("Instancia de Boolean:");
console.log("---------------------------------------------");
console.log(`Valor booleano 3: ${boolean3}`); // [Boolean: true]
console.log(`Tipo de dato de boolean3: ${typeof boolean3}`); // "object"
console.log();