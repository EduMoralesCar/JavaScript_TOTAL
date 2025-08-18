
const Producto = {
    nombre: "Camiseta",
    precio: 20,
    disponible: true,
}

console.table(Producto);


// Operaciones Matematicas
console.log(); // Salto de linea

let a = 0.1;
let b = 0.2;
let suma = a + b;

console.log(suma);
console.log(suma.toFixed(2)); //redondear los números a un número específico de decimales.

// Tipos de Datos
console.log(); // Salto de linea

// BigInt tipo de dato primitivo
let numeroMax = BigInt(99999999999999999999999999999999999999n); // 38 dígitos
console.log(numeroMax, '\nTipo de Dato:', typeof numeroMax);

console.log()
let x = 123456789012345678901234567890n;
let y = 987654321098765432109876543210n;

let suma1 = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = x / y;
let modulo = x % y

console.log('Suma:', suma1)
console.log('Resta:', resta)
console.log('Multiplicación:', multiplicacion)
console.log('División:', division)
console.log('Modulo', modulo)
console.log()

