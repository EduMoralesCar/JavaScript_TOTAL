// Funciones
// Declaradas
function FacturaProducto(nombre, precioCosto, precioVenta, cantidad, total) {
    this.nombre = nombre;
    this.precioCosto = precioCosto;
    this.precioVenta = precioVenta;
    this.cantidad = cantidad;
    this.total = total;
}

// Uso de la función
let producto1 = new FacturaProducto('Laptop', 800, 1000, 2, 2000);
console.table(producto1); // Muestra el objeto producto en la consola


// Expresadas
let calcularDescuento = function(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Uso de la función
console.log(calcularDescuento(200, 10)); // Muestra 180 en la consola


// Flechas

const sumar = (a, b) => a + b;

// Uso de la función
console.log(sumar(5, 3)); // Muestra 8 en la consola