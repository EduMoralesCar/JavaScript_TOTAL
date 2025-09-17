
// Promesas en paralelo con Promise.all
const promesa1 = new Promise(resolve => 
    setTimeout(() => resolve("Promesa 1"), 2000)
);

const promesa2 = new Promise(resolve => 
    setTimeout(() => resolve("Promesa 2"), 4000)
);

Promise.all([promesa1, promesa2])
.then(resultados => {
    console.log("Resultados:", resultados) // Array con resultados
})
.catch(error => console.error(error));