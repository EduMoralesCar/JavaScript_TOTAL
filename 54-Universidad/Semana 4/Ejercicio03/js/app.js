// Obtiene el formulario con id 'form3'
const form3 = document.getElementById("form3");

// Obtiene el cuerpo de la tabla donde se mostrarán los usuarios
const tabla = document.querySelector("#tablaUsuarios tbody");

// Escucha el evento 'submit' del formulario
form3.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtiene y limpia el valor del campo 'nombre'
    const nombre = this.nombre.value.trim();

    // Obtiene y limpia el valor del campo 'email'
    const email = this.email.value.trim();

    // Si ambos campos tienen datos
    if (nombre && email) {
        // Crea una nueva fila para la tabla con los datos ingresados
        const fila = `<tr><td>${nombre}</td><td>${email}</td></tr>`;

        // Inserta la nueva fila al final de la tabla
        tabla.insertAdjacentHTML("beforeend", fila);

        // Limpia los campos del formulario
        this.reset();
    }
});