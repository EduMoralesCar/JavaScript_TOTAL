// Veamos como ir incrementando un valor de 1 en 1 o en determinada cantidad
// Incrementar un valor

let valor = 10; // Valor inicial
console.log();
console.log("---------------------------------------------");
console.log("Incrementando y Decrementando un Valor:");
console.log("---------------------------------------------");
console.log(`Valor inicial: ${valor}`);

// Incrementar un valor
console.log();
valor++; // Incrementa en 1
console.log(`Valor después de incrementar en 1: ${valor}`); // 11

// Incrementar en una cantidad específica
console.log();
valor += 5; // Incrementa en 5
console.log(`Valor después de incrementar en 5: ${valor}`); // 16

// Decrementar un valor
console.log();
valor--; // Decrementa en 1
console.log(`Valor después de decrementar en 1: ${valor}`); // 15

// Decrementar en una cantidad específica
console.log();
valor -= 3; // Decrementa en 3
console.log(`Valor después de decrementar en 3: ${valor}`); // 12

// Incrementar un valor con un bucle
console.log();
console.log();
console.log("---------------------------------------------");
console.log("Incrementando un valor con un bucle:");
console.log("---------------------------------------------");
for (let i = 0; i < 5; i++) {
    valor++; // Incrementa en 1 en cada iteración
    console.log(`Valor después de incrementar en 1, iteración ${i + 1}: ${valor}`);
}


// Decrementar un valor con un bucle
console.log();
console.log("---------------------------------------------");
console.log("Decrementando un valor con un bucle:");
console.log("---------------------------------------------");
for (let i = 0; i < 5; i++) {
    valor--; // Decrementa en 1 en cada iteración
    console.log(`Valor después de decrementar en 1, iteración ${i + 1}: ${valor}`);
}

console.log();
console.log("---------------------------------------------");

