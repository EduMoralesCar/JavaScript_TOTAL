const producto = {
    nombre: 'impresora',
    marca: 'HP',
    precio: 300,
    disponible: true,
    modelo: 'LaserJet Pro M15w',
    informacion: { peso: '1kg', medida: '1m' },
    especificaciones: { color: 'blanco', conectividad: 'USB, Wi-Fi', garantia: '1 año' }
};

const { nombre } = producto;
// Imprimir el nombre del producto:
console.log();
console.log("Nombre del producto:");
console.log(nombre); // impresora
console.log();


// Acceder a las propiedades del objeto:
console.log("Nombre del Producto:");
console.log(producto.nombre); // impresora
console.log();


// Acceder a las propiedades del objeto anidado:
console.log("Peso del Producto:");
console.log(producto.informacion.peso); // 1kg
console.log();

// Otra forma de acceder a las propiedades del objeto anidado:
const { informacion: { medida }, especificaciones: {garantia} } = producto;

// Imprimir la medida del producto:
console.log("Medida del Producto y Garantia:");
console.log(medida); // 1m
console.log(garantia); // 1 año
console.log();

