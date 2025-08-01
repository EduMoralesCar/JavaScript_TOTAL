// Añadir funciones a un objeto

const reproductor = {
    reproducir: function (id) {
        console.log(`\nReproduciendo cancion con el id ${id}`)
    },

    pausar: function () {
        console.log("Pausando el audio...");
    },

    eliminar: function (id) {
        console.log(`Eliminando la canción...${id}\n`)

    }
}


reproductor.reproducir(30);
reproductor.pausar();
reproductor.eliminar(30);