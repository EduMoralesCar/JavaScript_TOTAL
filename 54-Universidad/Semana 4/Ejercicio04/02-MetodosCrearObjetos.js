// Objeto anidado
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    direccion: {
        calle: "123 Main St",
        ciudad: "Madrid",
        pais: "España"
    }
};

// Arreglos dentro de Objetos
let persona1 = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    habilidades: ["JavaScript", "React", "Node.js"]
};

let persona2 = {
    nombre: "Ana",
    edad: 28,
    profesion: "Diseñadora",
    habilidades: ["Photoshop", "Illustrator"]
};

// Obteniendo las claves del objeto
let claves = Object.keys(persona2);

// Imprimiendo las claves
console.log("Claves del objeto persona2:");
// console.log(claves);
claves.forEach(clave => {
    console.log(clave);
});


console.log(); // salto de linea

// Metodo Object.values()
let valores = Object.values(persona2);
console.log("Valores del objeto persona2:");
console.log(valores);

console.log(); // salto de linea

// Metodo Object.entries()
let entradas = Object.entries(persona2);
console.log("Entradas del objeto persona2:");
console.log(entradas);