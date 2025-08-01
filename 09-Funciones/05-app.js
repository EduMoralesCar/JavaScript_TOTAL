// Comunicación entre funciones
// Inicia de la Apps
iniciarApp();


function iniciarApp() {
    console.log('\nIniciando App...');
    inicioSesion();
}

function inicioSesion() {
    console.log("Aplicación iniciada correctamente");
    usarioAtentificado('edomocar');
}

function usarioAtentificado(usuario) {
    console.log("Autentificación de usuario... \nEspere un momento...");
    console.log(`Usuario atentificado exitosamente: ${usuario}\n`);
}
