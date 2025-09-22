/**
Ejercicio 1: Función de Suma Asíncrona
Crea una función suma Asincrona que simule una operación de
suma que tarda 2 segundos en completarse. La función debe tomar dos números y un callback.
El callback debe ser llamado con el resultado de la suma después de 2 segundos.
 */

function sumaAsincrona(callback) {
    setTimeout(() => {
        let num1 = 5;
        let num2 = 7;
        const resultado = num1 + num2;
        callback(resultado);
    }, 2000);
}

// Uso de la Funcion
// sumaAsincrona(resultado => console.log('Total:', resultado));
sumaAsincrona((resultado) => {
    console.log('Total:', resultado);
});