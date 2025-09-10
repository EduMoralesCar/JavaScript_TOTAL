
document.getElementById("form1").addEventListener(submit), function (e) {
    e.preventDefault();
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim()
    const error = document.getElementById("error1|");

    if (!nombre || !email) {
        error.textContent = "Todo los campos son obligatorios"
    } else {
        error.textContent = "";
        alert("Formulario enviado correctamente");
        this.reset();
    }
}