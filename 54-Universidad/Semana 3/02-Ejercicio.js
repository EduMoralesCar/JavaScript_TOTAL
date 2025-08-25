/*
Crea una función que tome una cadena de texto que representa una
fecha en formato "DD/MM/YYYY" y la valide. Si la fecha es válida,
formatéala a "AAAA-MM-DD" (formato ISO 8601).
*/

function validarYFormatearFecha(fecha) {
    // Expresión regular para validar la fecha en formato "DD/MM/YYYY"
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
    if (!regex.test(fecha)) {
        return "Fecha inválida";
    }

    // Extraer partes de la fecha
    const [dia, mes, anio] = fecha.split("/").map(Number);
    // Validar fecha
    const fechaObj = new Date(anio, mes - 1, dia);
    if (fechaObj.getFullYear() !== anio || fechaObj.getMonth() !== mes - 1 || fechaObj.getDate() !== dia) {
        return "Fecha inválida";
    }

    // Formatear a "AAAA-MM-DD"
    return `${anio}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
}

console.log(validarYFormatearFecha("29/02/2020")); // "2020-02-29"
console.log(validarYFormatearFecha("31/04/2025")); // "Fecha inválida"
console.log(validarYFormatearFecha("15/08/2022")); // "2022-08-15"