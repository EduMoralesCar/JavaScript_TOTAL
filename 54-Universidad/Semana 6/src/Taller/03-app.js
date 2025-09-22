/**
Ejercicio 3: Operación de Multiplicación Asíncrona
Escribe una función multiplicación Asincrona que multiplique dos números
y devuelva el resultado a través de un callback.
La función debe tardar 1 segundo en completarse.
 */

function multiplicacionAsincrona(num1, num2, callback) {
    setTimeout(() => {
        resultado = num1 * num2;
        callback(resultado);
    }, 1000);
}

// Uso de la función
multiplicacionAsincrona(4, 5, (resultado) => {
    console.log('El resultado de la Multiplicacion:', resultado);
})