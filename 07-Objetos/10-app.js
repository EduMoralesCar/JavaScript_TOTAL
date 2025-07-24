// Podemos crear un objeto que agrupe toda esta información:
const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    modelo: "LaserJet Pro M15w",
    disponible: true
};


// Objeto Constructor
function Producto(nombre, marca, precio, modelo) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.modelo = modelo;
    this.disponible = true;
}

const producto2 = new Producto("Laptop", "Lenovo", 790, "ThinkPad");
console.log(producto2);
