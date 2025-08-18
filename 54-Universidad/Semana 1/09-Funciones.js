// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar('Juan')); // Devuelve "Hola, Juan!"

// Función anónima asignada a una variable
const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
}

console.log(despedir('Juan')); // Devuelve "Adiós, Juan!"
