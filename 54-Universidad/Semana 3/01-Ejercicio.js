/*
Ejercicio 1: Validación y Formateado de Textos Complejos

Crea una función que tome una cadena de texto que representa una
dirección de correo electrónico y valide su formato según los
estándares RFC 5322.
*/

function validarEmail(email) {
    // esta variable contiene la expresión regular para validar el email
    // según los estándares RFC 5322
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

email = "usuario@12.com"; // usuario@dominio.extensión
if (validarEmail(email)) {
    console.log("El correo electrónico es válido.");
} else {
    console.log("El correo electrónico no es válido.");
}

console.log();
console.log(email);
console.log(validarEmail(email));