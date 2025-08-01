// Definimos productos como objetos
const producto1 = { nombre: 'Camisa', precio: 200 };
const producto2 = { nombre: 'Pantalón', precio: 300 };
const producto3 = { nombre: 'Zapatos', precio: 400 };

// Carrito y lógica
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

// Agregamos productos al carrito
agregarAlCarrito(producto1);
agregarAlCarrito(producto2);
agregarAlCarrito(producto3);

// Mostramos resultados
const totalSinImpuesto = calcularTotal();
console.log(`Total sin impuesto: S/. ${totalSinImpuesto}`);

const totalFinal = calcularTotalConImpuesto();
console.log(`Total con impuesto (15%): S/. ${totalFinal.toFixed(2)}`);
