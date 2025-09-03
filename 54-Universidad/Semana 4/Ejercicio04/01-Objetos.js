const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Invocando el método saludar
persona.saludar();

// Imprimiendo la información de la persona
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Profesión: " + persona.profesion);
console.table(persona);


// otras formas de crear un Objeto
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
};

// Constructor
 function usuario(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

// Instanciando un nuevo objeto
let usuario1 = new usuario("Ana", 28, "Diseñadora");

// Llamando al método usuario1
console.table(usuario1);


// MModificamos Propiedades
usuario1.edad = 30;

// Agregamos una nueva propiedad
usuario1.email = "ana@example.com";

// Eliminar Propiedades
delete usuario1.profesion;

//Mostramos la version modificada
console.log("Después de modificar:");
console.table(usuario1);