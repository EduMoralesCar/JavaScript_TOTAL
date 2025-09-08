// Objeto Inicial
const persona = {
    nombre: "María",
    edad: 20
};

// Mostrar Datos
function mostrar() {
    const div = document.getElementById('datos');
    div.innerHTML = `Nombre: ${persona.nombre}<br>Edad: ${persona.edad}`;
}

// Actualizar Nombre
function actualizar1() {
    const input = document.getElementById('nuevoNombre');
    const nuevoNombre = input.value.trim();

    if (nuevoNombre !== '') {
        persona.nombre = nuevoNombre;
        input.value = '';
        mostrar();
    }
}

// Actualizar Nombre y Edad
function actualizar() {
    const nombreInput = document.getElementById('nuevoNombre');
    const edadInput = document.getElementById('nuevaEdad');

    const nuevoNombre = nombreInput.value.trim();
    const nuevaEdad = parseInt(edadInput.value);

    if (nuevoNombre !== '') {
        persona.nombre = nuevoNombre;
        nombreInput.value = '';
    }

    if (!isNaN(nuevaEdad)) {
        persona.edad = nuevaEdad;
        edadInput.value = '';
    }

    mostrar();
}



// Mostrar datos al cargar la página
mostrar();
