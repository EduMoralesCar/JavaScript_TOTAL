/* Ejemplo: Transaccion de pago en linea

    Supongamos que deseamos simular una transacción de pago
    en línea y queremos asegurarnos de que se manejen
    correctamente tanto los pagos exitosos como los fallidos,
    utilizando promesas.
 */


const procesoPagos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2; // 80% de probabilidad de éxito
            if (exito) {
                resolve("Pago procesado con éxito!!");
            } else {
                reject("Error en el procesamiento del pago!!");
            }
        }, 3000);
    });
};

const totalPagar = 100;
console.log(`Iniciando el proceso de pago de $${totalPagar}...`);

procesoPagos()
.then(mensaje => {
    console.log(mensaje);
    console.log("Redirigiendo a la página de confirmación...");
})
.catch(error => {
    console.error(error);
    console.log("Mostrando mensaje de error al usuario.");
})
.finally(() => {
    console.log("Proceso de pago finalizado.");
});
