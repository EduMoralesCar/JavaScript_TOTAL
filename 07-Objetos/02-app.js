// Podemos crear un objeto que agrupe toda esta información:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true,
    modelo: "LaserJet Pro M15w"
};

// Version Original del objeto:
console.log();
console.log("-------------------------");
console.log("Objeto producto original:");
console.log("-------------------------");
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, disponible: true, modelo: 'LaserJet Pro M15w' }

// Agregar una nueva propiedad al objeto existente:
producto.peso = "4.2 kg";
console.log();
console.log("-------------------------------------------------------");
console.log("Objeto producto después de agregar la propiedad 'peso':");
console.log("-------------------------------------------------------");
console.log(producto);

// Eliminar una propiedad del objeto:
delete producto.disponible;
console.log();
console.log("--------------------------------------------------------------");
console.log("Objeto producto después de eliminar la propiedad 'disponible':");
console.log("--------------------------------------------------------------");
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, modelo: 'LaserJet Pro M15w', peso: '4.2 kg' }
console.log();