// Agregar un nuevo objeto al objeto existente:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true,
    modelo: "LaserJet Pro M15w",
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
};

console.log();
console.log("-------------------------");
console.log("Objeto producto original:");
console.log("-------------------------");

// Imprimir el objeto original:
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, disponible: true, modelo: 'LaserJet Pro M15w', informacion: { peso: '1kg', medida: '1m' } }


// Agregar un nuevo objeto al objeto existente:
producto.especificaciones = {
    color: "blanco",
    conectividad: "USB, Wi-Fi",
    garantia: "1 año"
};

console.log();
console.log("----------------------");
console.log("Objeto producto Nuevo:");
console.log("----------------------");

// Imprimir el objeto actualizado:
console.log(producto); // { nombre: 'impresora', marca: 'HP',