// Ejemplo: Async Await

async function fechaActual() {
    const response = await fetch('https://date.nager.at/api/v3/NextPublicHolidaysWorldwide');
    const data = await response.json();
    return data;
}

fechaActual().then(data => console.log(data));