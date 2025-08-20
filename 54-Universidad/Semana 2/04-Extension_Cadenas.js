// Extensión de cadenas en JavaScript
// Método para capitalizar la primera letra
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1); // Capitaliza la primera letra hasta el final
};

let cadena = "bienvenido a la programación en JavaScript";
console.log(cadena.capitalize()); // "Bienvenido a la programación en JavaScript"