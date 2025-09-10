let contador = 0;
let historial = [];

function incrementar() {
    contador++;
    document.getElementById('contador').innerText = contador;

    // Agregar al historial
    historial.push(contador);
    mostrarInterfaz();
}

function decrementar() {
    contador--;
    document.getElementById('contador').innerText = contador;

    // Agregar al historial
    historial.push(contador);
    mostrarInterfaz();
}

function mostrarInterfaz() {
    const lista = document.getElementById('historial');
    lista.innerHTML = '';

    historial.forEach(item => {
        lista.innerHTML += `<li>${item}</li>`;
    });
}

function reniciar() {
    contador = 0;
    historial = [];
    document.getElementById('contador').innerText = contador;
    mostrarInterfaz();
}