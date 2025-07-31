// Al Igual que los objetos un arreglo se puede modificar a pesar ade utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];


// Mostramos el Arreglo Inicial
console.log();
console.log("Arreglo Original:");
console.table(meses);


// Mostramos el Arreglo despues del Cambio del Indice 0
console.log();
console.log("Arreglo Despues:");
meses[0] = 'Nuevo Mes'
console.table(meses);


// También se puede añadir al final
console.log();
console.log("Agregando un Arreglo al Final:");
meses[6] = 'Julio'
console.table(meses);


// Tambien se puede agregar sin conocer el Indice 
console.log();
console.log("Agregando un Arreglo al Final:");
meses.push('Agosto','Setiembre', 'Octubre', 'Nobiembre', 'Diciembre');
console.table(meses);


// Al igual que los objetos en los arrays existen métodos que son bastante útiles, así que veamos algunos ejemplos en los siguientes videos.
console.log();
console.log("Array del Arreglo:");
console.log(meses);