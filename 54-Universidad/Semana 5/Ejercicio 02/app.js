// Areglo inicial
let numeros = [1, 2, 3, 4, 5];

// Mostrar numeros en la  lista
function mostrar() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';


    for (let num of numeros) {
        lista.innerHTML += `<li>${num}</li>`;

    }
}

// Agregar un numero
function agregar() {
    const input = document.getElementById('numero');
    const nuevo = parseInt(input.value);

    if (!isNaN(nuevo)) {
        numeros.push(nuevo);
        input.value = '';
        mostrar();
    }
} 

// Mostrar al cargar
mostrar();