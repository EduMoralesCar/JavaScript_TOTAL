// Promesas encadenadas
// Cada promesa se ejecuta cuando la anterior se ha cumplido

function paso1 () {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 1 Completado"), 2000);
    });
}

function paso2 () {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 2 Completado"), 4000);
    });
}

function paso3 () {
    return new Promise(resolve => {
        setTimeout(() => resolve("Paso 3 Completado"), 6000);
    });
}

// Encadenar las promesas
paso1 ()
.then(resultado => {
    console.log(resultado);
    return paso2(); // Retorna  una nueva promesa
})


paso2 ()
.then(resultado => {
    console.log(resultado);
    return paso3(); // Retorna  una nueva promesa
})

.then(resultado => console.log(resultado))
.catch(error => console.error(error));