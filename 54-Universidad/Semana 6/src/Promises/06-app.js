
// Promesas con fetch API(simulado)
// const simularFetch = () => {
function simularFetch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
            if (exito) {
                resolve({ nombre: "Edu", edad: 20 });
            } else {
                reject("Error al obtener los datos");
            }
        }, 2000);
    });
}

simularFetch()
    .then(data => console.log("Usuario:", data))
    .catch(error => console.error("Fallo:", error));