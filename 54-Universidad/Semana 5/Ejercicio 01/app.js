
let contador = 0;
let historial = [];

function contar() {
    contador++;
    document.getElementById('contador').textContent = contador;

    // Agregar al Historial
    historial.push(contador);
    mostrarHistorial();
}

function reniciar() {
    contador = 0;
    historial = [];
    document.getElementById('contador').textContent = contador;
    mostrarHistorial();
}

function mostrarHistorial() {
    const lista = document.getElementById('historial');
    lista.innerHTML = '';

    historial.forEach(num => {
        lista.innerHTML += `<li>${num}</li>`;
    });
}

function retroceder() {
    if (contador > 0) {
        contador--;
        document.getElementById('contador').textContent = contador;

        // Eliminar el último valor del historial
        historial.pop();
        mostrarHistorial();
    }
}
