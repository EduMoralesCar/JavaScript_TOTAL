// Lista de personas
const personas = [
    new Persona("Edu", "Morales"),
    new Persona("Aldo", "Gómez"),
    new Persona("Pedro", "Martínez")
];

// Funcion para Mostrar Personas
function mostrarPersonas() {
    const lista = document.getElementById('personas');
    lista.innerHTML = '';
    personas.forEach(persona => {
        const li = document.createElement('li');
        li.textContent = `${persona.nombre} ${persona.apellido}`;
        lista.appendChild(li);
    });
}

// Funcion para Agregar Persona
function agregarPersona() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    if (nombre && apellido) {
        personas.push(new Persona(nombre, apellido));
        mostrarPersonas();

        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
    }
}