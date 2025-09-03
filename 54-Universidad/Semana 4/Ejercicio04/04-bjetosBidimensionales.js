// Objetos Bidimensionales (Matrices)
// Definición de una matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Imprimir la matriz
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}

console.log(); // salto de linea

// Creacion de una matriz
let matrizvacia = new Array(3).fill(0).map(() => new Array(3).fill(0));

// Imprimir la matriz vacía
for (let i = 0; i < matrizvacia.length; i++) {
    console.log(matrizvacia[i]);
}


console.log(); // salto de linea

// Crear una matriz 3x3 con valores aleatorios entre 1 y 100
let matrizAleatoria = Array.from({ length: 3 }, () =>
  Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1) // Generar números aleatorios
);

// Imprimir la matriz
for (let fila of matrizAleatoria) {
  console.log(fila);
}


console.log(); // salto de linea


// Representacion de un tablero de ajedrez como Matriz 
let tableroAjedrez = [
    ['T', 'C', 'A', 'D', 'R', 'C', 'T'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['T', 'C', 'A', 'D', 'R', 'C', 'T']
];

// Imprimir el tablero de ajedrez
for (let fila of tableroAjedrez) {
    console.log(fila);
}
// Imprimir cada elemento del tablero de ajedrez
for (let i = 0; i < tableroAjedrez.length; i++) {
    for (let j = 0; j < tableroAjedrez[i].length; j++) {
        console.log(tableroAjedrez[i][j]);
    }
}