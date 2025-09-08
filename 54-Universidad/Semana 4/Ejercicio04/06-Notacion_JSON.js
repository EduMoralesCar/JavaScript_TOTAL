// Estructura Basica de un Objeto JSON
let persona = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid"
};
console.log(persona);

// Acceder a los valores del objeto JSON
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);


// Convertir una cadena JSON a un objeto JavaScript
let jsonString = '{"nombre": "Ana", "edad": 25, "ciudad": "Barcelona"}';
let objetoDesdeJson = JSON.parse(jsonString);
console.log(objetoDesdeJson);
console.log("Nombre:", objetoDesdeJson.nombre);
console.log("Edad:", objetoDesdeJson.edad);
console.log("Ciudad:", objetoDesdeJson.ciudad);