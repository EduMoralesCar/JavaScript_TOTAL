// funciones que retornan valores
function suma(a, b) {
    return a + b;
}
const a = 5;
const b = 6;
sumaTotal = suma(a, b);

// Imprimimos en Resultado
console.log(`${a} + ${b} =`, sumaTotal);



// Ejemplo Avanzado
// Definimos produtos como objetos

const producto01 = {
    nombre: "camisa",
    precio: 200
}

const producto02 = {
    nombre: "Pantalón",
    precio: 500
}

const producto03 = {
    nombre: "Zapatos",
    precio: 100
}

// Carrito y logica

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(`${producto.nombre} agregado al carrito por S/. ${producto.precio}`);
}

function calcularTotal() {
    let total = 0;
    for (let producto of carrito) {
        total += producto.precio;
    }
    return total;
}

function calcularImpuesto(monto) {
    return monto * 0.15; // 15% de impuesto
}

function calcularTotalConImpuesto() {
    const subtotal = calcularTotal();
    const impuesto = calcularImpuesto(subtotal);
    return subtotal + impuesto;
}


// Agregamos producto al carrito
console.log();
console.log("Agrengando Producto:");

agregarAlCarrito(producto01);
agregarAlCarrito(producto02);
agregarAlCarrito(producto03);


// Mostramos resultados
console.log();
console.log("Boleto:");

const totalSinImpuesto = calcularTotal();
console.log(`Total sin Impuesto: S/. ${totalSinImpuesto}`);

const totalFinal = calcularTotalConImpuesto();
console.log(`Total con Impuesto (15%): S/. ${totalFinal.toFixed(2)}`);
