// Map
let VariableMap = new Map();
VariableMap.set(1, 'edomocar');
VariableMap.set(2, 'JavaScript');
VariableMap.set(3, 'Programación');
VariableMap.set(4, 'Desarrollo');
VariableMap.set(5, 'Web');

console.log(); // Salto de línea en la consola
console.table(VariableMap);

// Verificar si existe un elemento
console.log(VariableMap.has(3)); // true
console.log(VariableMap.has(10)); // false

// Eliminar un elemento
VariableMap.delete(2);
console.log(VariableMap.has(2)); // false

//Eliminar todos los elementos
//VariableMap.clear();

console.log(); // Salto de línea en la consola
console.table(VariableMap);