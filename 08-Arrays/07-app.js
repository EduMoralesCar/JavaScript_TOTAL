// Podemos crear un objeto que agrupe toda esta información:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true,
    modelo: "LaserJet Pro M15w"
};

// Aplicamos el metodo Destructuring para extraer propiedades del objeto:
const { nombre, marca, precio, modelo } = producto;
console.log();
console.log("----------------------------------");
console.log("Destructuring del objeto producto:");
console.log("----------------------------------");

// Imprimimos las propiedades extraídas:
console.log("Propiedades extraídas:");
console.log(`Nombre: ${nombre}`); // Nombre: impresora 
console.log(`Marca: ${marca}`); // Marca: HP
console.log(`Precio: ${precio}`); // Precio: 300
console.log(`Modelo: ${modelo}`); // Modelo: LaserJet Pro M15w
console.log();


// Destructuring con Arreglos (Arrays)

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [primero, , , , quinto, , , , , decimo] = numeros;

console.log("Extraemos 3 valores:");
console.log(primero, quinto, decimo);
console.log();