// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento

const producto = {
    nombre: "impresora",
    marca: "HP",
    precio: 300,
    disponible: true,
    modelo: "LaserJet Pro M15w",
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre}\nTiene un precio de: ${this.precio}`);
    }
};

// Imprimimos el valor de mostrarInfo
console.log();
producto.mostrarInfo();