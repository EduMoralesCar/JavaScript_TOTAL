import {useRef, useState} from "react";

const Perfil = () => {
    const imagenUsuario = useRef();
    const nombreRef = useRef();
    const descripcionRef = useRef();


    const [imagenPerfil, setImagenPerfil] = useState("https://th.bing.com/th/id/OIP.YqAd0wZABOebupd32byIBQHaED?w=313&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1");
    const [nombrePerfil, setNombrePerfil] = useState("Nombre de Usuario");
    const [descripcionPerfil, setDescripcionPerfil] = useState("Descripción del usuario...");

    const actualizarPerfil = () => {
        if (imagenUsuario.current.value) setImagenPerfil(imagenUsuario.current.value);
        if (nombreRef.current.value) setNombrePerfil(nombreRef.current.value);
        if (descripcionRef.current.value) setDescripcionPerfil(descripcionRef.current.value);

        // Limpiar los campos después de actualizar
        imagenUsuario.current.value = "";
        nombreRef.current.value = "";
        descripcionRef.current.value = "";
    };

    return (
        <div className="container text-center mt-5">
            <h2>Perfil de Usuario</h2>
            <div className= "card" style={{ width: '18rem', margin: '0 auto' }}>
                <img src={imagenPerfil} className="card-img-top" alt="Imagen de Perfil" />
                <div className="card-body">
                    <h5 className="card-title">{nombrePerfil}</h5>
                    <p className="card-text">{descripcionPerfil}</p>
                </div>
            </div>

            <div className="mt-4">
                <input type="text" ref={imagenUsuario} className="form-control mb-2" placeholder="URL de la imagen de perfil" />
                <input type="text" ref={nombreRef} className="form-control mb-2" placeholder="Nombre de usuario" />
                <textarea ref={descripcionRef} className="form-control mb-2" placeholder="Descripción del usuario"></textarea>
                
                <button onClick={actualizarPerfil} className="btn btn-primary">Actualizar Perfil</button>
            </div>
        </div>
    );
}

export default Perfil;