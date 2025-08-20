// Métodos de concatenación en JavaScript

let nombre = 'Juan';
let apellido = 'Pérez';

// Concatenación con el operador +
let nombreCompleto = nombre + ' ' + apellido;
let nombreCompleto2 = nombre.concat(' ', apellido);
console.log('Concatenación con +:', nombreCompleto2);

// Concatenación con el método concat()
nombreCompleto = nombre.concat(' ', apellido);
console.log('Concatenación con concat():', nombreCompleto);

// Concatenación con template literals
nombreCompleto = `${nombre} ${apellido}`;
console.log('Concatenación con template literals:', nombreCompleto);

// Concatenación regular
console.log('Concatenacion Regular:', nombre, apellido);

