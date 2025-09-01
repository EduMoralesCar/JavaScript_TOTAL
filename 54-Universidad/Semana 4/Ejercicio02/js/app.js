// Escucha el evento 'submit' del formulario con id 'form2'
document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe y recargue la página

  // Obtiene el valor del campo 'password'
  const pass = this.password.value;

  // Obtiene el elemento donde se mostrarán los errores
  const error = document.getElementById("error2");

  // Expresión regular para validar la contraseña:
  // - Al menos una mayúscula
  // - Al menos un número
  // - Al menos un símbolo
  // - Mínimo 8 caracteres
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  // Verifica si la contraseña cumple con los requisitos
  if (!regex.test(pass)) {
    error.textContent = "Contraseña débil. Requiere 8+ caracteres, mayúscula, número y símbolo.";
  } else {
    error.textContent = ""; // Limpia el mensaje de error
    alert("Contraseña segura ✅"); // Muestra alerta de éxito
  }
});