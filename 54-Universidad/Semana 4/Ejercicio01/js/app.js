// Escucha el evento 'submit' del formulario con id 'form1'
document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe y recargue la página

  // Obtiene y limpia el valor del campo 'nombre'
  const nombre = this.nombre.value.trim(); // Elimina espacios en blanco al inicio y final

  // Obtiene y limpia el valor del campo 'email'
  const email = this.email.value.trim();

  // Obtiene el elemento donde se mostrarán los errores
  const error = document.getElementById("error1");

  // Verifica si algún campo está vacío
  if (!nombre || !email) {
    error.textContent = "Todos los campos son obligatorios."; // Muestra mensaje de error
  } else {
    error.textContent = ""; // Limpia el mensaje de error
    alert("Formulario enviado correctamente."); // Muestra alerta de éxito
    this.reset(); // Limpia todos los campos del formulario
  }
});