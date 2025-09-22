
const exito = false;

function Operacion() {
    return new Promise((resolve, reject) => {
        return (exito)
        ? resolve('Operacion Exitosa')
        : reject('Operacion Fallida');
    });
}

Operacion()
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
