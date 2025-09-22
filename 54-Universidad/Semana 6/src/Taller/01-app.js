/**
Ejercicio 1: Función de Suma Asíncrona
Crea una función suma Asincrona que simule una operación de
suma que tarda 2 segundos en completarse. La función debe tomar dos números y un callback.
El callback debe ser llamado con el resultado de la suma después de 2 segundos.
 */


function sumaAsincrona(num1, num2, callback) {
    setTimeout(() => {
        const resultado = num1 + num2;
        callback(resultado);
    }, 2000);
}

function restaAsincrona(num1, num2, callback) {
    setTimeout(() => {
        const resultado = num1 - num2;
        callback(resultado);
    }, 3000);
}

// Uso de la Funcion
sumaAsincrona(5, 6, (resultado) => {
    console.log('El resultado de la suma es:', resultado);
});

restaAsincrona(6, 5, (resultado) => {
    console.log('El resultado de la resta es:', resultado);
});