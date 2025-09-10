// Primera parte
let misNumeros = [];

function agregarNumero() {
    const numeroInput = document.getElementById('numero');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        misNumeros.push(numero);
        numeroInput.value = '';
        mostrarMisNumeros();
    }
}

function mostrarMisNumeros() {
    const lista = document.getElementById('mis-numeros');
    lista.innerHTML = '';

    misNumeros.forEach(item => {
        lista.innerHTML += `<li>${item}</li>`;
    });
}

// Segunda parte
let misTextos = [];

function agregarTexto() {
    const textoInput = document.getElementById('texto');
    const texto = textoInput.value;

    if (texto.trim() !== '') {
        misTextos.push(texto);
        textoInput.value = '';
        mostrarMisTextos();
    }
}

function mostrarMisTextos() {
    const lista = document.getElementById('mis-textos');
    lista.innerHTML = '';

    misTextos.forEach(item => {
        lista.innerHTML += `<li>${item}</li>`;
    });
}
