// Métodos de concatenación en JavaScript

let nombre = 'Juan';
let apellido = 'Pérez';

// Concatenación con el operador +
let nombreCompleto = nombre + ' ' + apellido;
console.log('Concatenación con +:', nombreCompleto);

// Concatenación con el método concat()
nombreCompleto = nombre.concat(' ', apellido);
console.log('Concatenación con concat():', nombreCompleto);

// Concatenación con template literals
nombreCompleto = `${nombre} ${apellido}`;
console.log('Concatenación con template literals:', nombreCompleto);

// Concatenación regular
console.log('Concatenacion Regular:', nombre, apellido);