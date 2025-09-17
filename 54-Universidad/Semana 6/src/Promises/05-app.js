
// Promesas con fetch API(simulado)
const usuarios = [
    { id: 1, nombre: "Edu" },
    { id: 2, nombre: "Karen" },
    { id: 3, nombre: "Juan" },
];
const obtenerUsuarios = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuarios);
            // reject("No se pudo obtener los usuarios");
        }, 2000);
    });
};
obtenerUsuarios()
    .then(usuarios => console.log(usuarios))
    .catch(error => console.error(error));