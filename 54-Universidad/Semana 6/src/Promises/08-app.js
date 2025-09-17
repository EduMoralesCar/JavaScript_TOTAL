/* Ejemplo: de Bases de Datos

    En este caso, supondremos que estamos trabajando con
    datos de usuarios y queremos simular la adición de múltiples
    usuarios a una base de datos, teniendo en cuenta casos
    exitosos y fallidos.
 */

const agregarUsuario = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2; // 80% de probabilidad de éxito
            if (exito) {
                resolve("Usuario agregado con éxito.");
            } else {
                reject(new Error("Error al agregar el usuario."));
            }
        }, 1000);
    });
};

const NuevosUsuarios = [
    { id: 4, nombre: "Ana" },
    { id: 5, nombre: "Luis" },
    { id: 6, nombre: "Marta" }
];

agregarUsuario(NuevosUsuarios)
    .then(mensaje => {
        console.log(mensaje);
        // mostrar los usuarios agregados
        console.log("Usuarios:", NuevosUsuarios);
    })
    .catch(error => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("Proceso finalizado.");
    });

