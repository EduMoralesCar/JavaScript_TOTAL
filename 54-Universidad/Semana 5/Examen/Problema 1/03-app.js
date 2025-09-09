// Set
let VariableSet = new Set();
VariableSet.add(1);
VariableSet.add(2);
VariableSet.add(3);
VariableSet.add(4);
VariableSet.add(5);
VariableSet.add(5); // No se añade porque ya existe
VariableSet.add('edomocar'); // Diferente tipo de dato

console.log(); // Salto de línea en la consola

// Añadir un Objeto
let objeto1 = {id: 1, nombre: 'edomocar'};
let objeto2 = {id: 2, nombre: 'JavaScript'};
VariableSet.add(objeto1);
VariableSet.add(objeto2);


console.log(); // Salto de línea en la consola
console.table(VariableSet);

// Verficiar si existe un elemento
console.log(VariableSet.has(3)); // true
console.log(VariableSet.has(10)); // false

// Eliminar un elemento
VariableSet.delete(2);

//Eliminar todos los elementos
//VariableSet.clear();

console.log(); // Salto de línea en la consola
console.table(VariableSet);