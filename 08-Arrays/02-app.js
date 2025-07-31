// Creando un arreglo
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');

console.log();
console.log("Tabla de Arreglo de Meses:");
console.table(meses);

// Cuanto mide el Arreglo
console.log("Longitud:", meses.length);

// Recorrido de los Meses del Arreglo
console.log();
console.log("Recorrido de los Meses:");

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}