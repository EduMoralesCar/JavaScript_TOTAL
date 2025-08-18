// Operadores matemáticos javascript
// OPeradores Basicos

const Operadores_Basicos = {
    resultado1: 5 + 6,
    resultado2: 10 - 8,
    resultado3: 2 * 5,
    resultado4: 10 / 2,
    resultado5: 11 % 3
}

console.table(Operadores_Basicos)


// Operadores de Incremento y Decremento

let valor = 6;
const Operadores_Incremento = {
    valor: valor,
    valor2: ++valor,
    valor3: valor++
}

let valor1 = 8;
const Operaciones_Decremento = {
    valor1: valor1,
    valor2: --valor1,
    valor3: valor1--
}

console.log("Operadores de Incremento:")
console.table(Operadores_Incremento)
console.log("Operaciones de Decremento:")
console.table(Operaciones_Decremento)