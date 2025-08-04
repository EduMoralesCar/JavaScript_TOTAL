
// Veamos algunas buenas practicas, sencillas para escribirs ifs

const autenticado = true;

if (autenticado === true) {
    console.log('El Usuario esta autenticado')
}

const puntaje = 500;

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('Excelente esfuerzo')
        return; // Si cumple la condicion termina aqui la Ejecución
    }

    if (puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }

    else {
        console.log('No sabria decirte, pero buen esfuerzo...')
    }
}

// Mostramos
revisarPuntaje();