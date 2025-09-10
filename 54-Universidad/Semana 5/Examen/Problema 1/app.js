const productos = [
    { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
    { nombre: "Teléfono", precio: 800, categoria: "Electrónica" },
    { nombre: "Camisa", precio: 30, categoria: "Ropa" },
    { nombre: "Zapatos", precio: 70, categoria: "Ropa" },
    { nombre: "Libro", precio: 20, categoria: "Educación" }
];

console.table(productos);

// 1. filter() 
const productosElectronicos = productos.filter(producto => producto.categoria === "Electrónica");
console.table(productosElectronicos);

// 2. map()
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

// 3. reduce() 
const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(`Precio total: $${precioTotal}`);