// Podemos crear un objeto que agrupe toda esta información:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true,
    modelo: "LaserJet Pro M15w"
};


// Congelar el objeto para evitar modificaciones:
// Esto permite congelar y asi no podremos agregar, eleminar y actualizar ya que primero esta definido el freeze
Object.freeze(producto);
console.log();
console.log("-------------------------");
console.log("Objeto producto congelado:");
console.log("-------------------------");
// Imprimir el objeto congelado:
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, disponible: true, modelo: 'LaserJet Pro M15w' }


// Datos original del objeto:
console.log();
console.log("-------------------------");
console.log("Objeto producto original:");
console.log("-------------------------");
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, disponible: true, modelo: 'LaserJet Pro M15w' }
console.log();


// Agregar una nueva propiedad al objeto existente:
producto.peso = "4.2 kg";
producto.color = "blanco";
producto.conectividad = "USB, Wi-Fi";
console.log("-------------------------------------------------------");
console.log("Objeto producto después de agregar nuevas propiedades:");
console.log("-------------------------------------------------------");
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, disponible: true, modelo: 'LaserJet Pro M15w', peso: '4.2 kg', color: 'blanco', conectividad: 'USB, Wi-Fi' }
console.log();


