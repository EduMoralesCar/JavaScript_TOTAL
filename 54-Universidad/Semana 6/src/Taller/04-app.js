/**
Ejercicio 4: 
PROMISE: Simulación de una Operación Asíncrona

Crea una función simularOperación que simule una operación
que toma 2 segundos en completarse.
La función debe devolver una promesa que se resuelve con el
mensaje "Operación exitosa" después de 2 segundos.
 */

function simularOperación() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operación Exitosa!!");
        }, 2000);
    });
}

// Uso de la función
simularOperación()
    .then((mensaje) => {
        console.log(mensaje);
    });