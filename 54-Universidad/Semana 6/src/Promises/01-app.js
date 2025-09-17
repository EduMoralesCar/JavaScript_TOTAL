// Ejemplo de Promesas en JavaScript
// Crear una Promesa
const miPromesa = new Promise((resolve, reject) => {
const exito = true; // Simula exito o Rechazo

setTimeout(() => {
    if (exito) {
        resolve("Operacion Exitosa!!");
    } else {
        reject("Operacion Rechazada!!");
    }
}, 5000);
});

// Consumir la Promesa
miPromesa
.then(resultado => console.log("Exito:", resultado))
.catch(error => console.error("Error:", error))
.finally(() => console.log("Proceso Finalizado"));
