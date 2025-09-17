// setTimeout con Callback
// donde setTimeout es una funcion que permite ejecutar una funcion despues de un tiempo determinado

function mostrarMensaje (callback) {
    setTimeout(() => {
        console.log("Mensaje despues de 5 Segundos");
        callback();
    }, 5000); // 5000 milisegundos = 5 segundos
}

function finalizar() {
    console.log("Proceso Terminado!!");
}

// Uso
mostrarMensaje(finalizar);
console.log("Iniciando Proceso...");