// Tipos de Datos
let nombre = "Juan"; // String
let edad = 25; // Number
let esEstudiante = true; // Boolean
let direccion; // Undefined
let telefono = null; // Null

// Arrays
let frutas = ["Manzana", "Banana", "Cereza"]; // Array

// Objetos
let persona = {
    nombre: 'Ana',
    apellido: 'Gomez',
    edad: 30,
    ciudad: 'Madrid',
    profesion: {
        titulo: 'Ingeniera',
        empresa: 'Tech Solutions'
    }
};

// Undefined
let variableIndefinida; // Variable sin valor asignado
console.log(variableIndefinida); // Muestra 'undefined' en la consola

// Funciones
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Uso de la función
console.log(saludar("Carlos")); // Muestra 'Hola, Carlos!' en la consola

// Interacción con el usuario
window.alert("¡Bienvenido a mi primera aplicación en JavaScript!");

// Crear Objetos mediante Funciones Constructoras
function Coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

let miCoche = new Coche('Toyota', 'Corolla', 2020);
console.log(miCoche); // Muestra el objeto coche en la consola

function Estudiante(nombre, edad, carrera) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
}

let estudiante1 = new Estudiante('Luis', 22, 'Ingeniería');
console.log(estudiante1); // Muestra el objeto estudiante en la consola

// Bucles
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); // Muestra cada fruta en la consola
}

while (edad < 30) {
    console.log(`Tienes ${edad} años.`);
    edad++;
}

let edad1 = 25;
// do while
do {
    console.log(`Edad actual: ${edad1}`);
    edad1++;
} while (edad1 < 35);
