// Definimos la funcion de Multiplicar
function multiplicar(a, b) { // a y b son Paramentros
    console.log(`La Multiplicación de ${a} y ${b} es: ${a * b}`);
}

multiplicar(5, 7); // 5 y 7 son argumentos


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}, Bienvenido a la Tienda`);
}

rl.question('Ingrese su Nombre: ', (nombre) => {
  rl.question('Ingrese su Apellido: ', (apellido) => {
    saludar(nombre, apellido);
    rl.close();
  });
});
