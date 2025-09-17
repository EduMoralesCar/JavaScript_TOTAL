// Callback sincrono simple
function saludar(nombre, callback) {
    console.log('Hola ' + nombre);
    callback();
}

function despedirse() {
    console.log("Hasta luego!!");
}

saludar("Edumocar", despedirse);