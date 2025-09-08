// Areglos de Objetos
let tareas = [
    { id: 1, texto: "Estudiar JavaScript" },
    { id: 2, texto: "Leer un libro" }
];

// Mostrar tarea
function mostrarTareas() {
    const contenedor = document.getElementById('tarea');
    contenedor.innerHTML = '';

    tareas.forEach(tarea => {
        const item = document.createElement('p');
        item.textContent = `${tarea.id}. ${tarea.texto}`;
        contenedor.appendChild(item);
    });
}

// Agregar nueva tarea
function agregarTarea() {
    const input = document.getElementById('nuevaTarea');
    const texto = input.value.trim();

    if (texto !== '') {
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: texto
        };
        tareas.push(nuevaTarea);
        input.value = '';
        mostrarTareas();
    }
}

document.getElementById('agregarBtn').addEventListener('click', agregarTarea);

// Mostrar tareas al cargar
mostrarTareas();
