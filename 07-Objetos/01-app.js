// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombre = "impresora";
const marca = "HP";
const precio = 300;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta información:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true
};

// Acceder a las propiedades del objeto:
console.log();
console.log("-----------------------------------------------------------------");
console.log("Accediendo a las propiedades del objeto producto:");
console.log("-----------------------------------------------------------------");
console.log(producto); // { nombre: 'impresora', marca: 'HP', precio: 300, disponible: true }
console.log();
console.log("-----------------------------------------------------------------");
console.log("Accediendo a propiedades específicas del objeto producto:");
console.log("-----------------------------------------------------------------");
console.log(producto.nombre); // impresora
console.log(producto.marca); // HP
console.log(producto.precio); // 300
console.log(producto.disponible); // true


// También podemos crear un objeto vacío y luego agregarle propiedades:
// Crear un objeto vacío:
const producto2 = {};
// Agregar propiedades al objeto vacío:
producto2.nombre = "tablet";
producto2.marca = "Apple";
producto2.precio = 500;
producto2.disponible = true;

// Acceder a las propiedades del objeto vacío:
console.log();
console.log("-----------------------------------------------------------------");
console.log("Accediendo a las propiedades del objeto producto2:");
console.log("-----------------------------------------------------------------");
console.log(producto2); // { nombre: 'tablet', marca: 'Apple', precio: 500, disponible: true }
console.log();
