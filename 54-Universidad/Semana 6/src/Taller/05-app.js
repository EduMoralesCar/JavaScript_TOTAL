/**
Ejercicio 4: 
PROMISE: Simulación de una Operación Asíncrona

Crea una función simularOperación que simule una operación
que toma 2 segundos en completarse.
La función debe devolver una promesa que se resuelve con el
mensaje "Operación exitosa" después de 2 segundos.
 */

const exito = false;

function simularOperación() {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (exito) {
                resolve("Operación Exitosa!!");
            } else {
                resolve("Operación Fallida :(");
            }
        }, 2000);
    });
}

// Uso de la función
simularOperación()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error))
    .finally(() => console.log("Operación Finalizado"));