import { useContext, createContext, useState } from "react";

const UsuarioContext = createContext();

export function UsuarioProvider({ name }) {
    const [nombre, setNombre] = useState(name || "Juan");

    function MostrarUsuario() {
        const { nombre } = useContext(UsuarioContext);
        return <h2>Usuario: {nombre}</h2>;
    }

    function CambiarUsuario() {
        const { setNombre } = useContext(UsuarioContext);
        return (
            <button className="btn btn-primary" onClick={() => setNombre("Maria")}>
                Cambiar Usuario
            </button>
        );
    }

    return (
        <UsuarioContext.Provider value={{ nombre, setNombre }}>
            <div className="container text-center mt-5">
                <MostrarUsuario />
                <CambiarUsuario />
            </div>
        </UsuarioContext.Provider>
    );
}

// Exportar el componente UsuarioProvider como el componente por defecto
// Export por defecto el Provider para usarlo como componente envolvente
export default UsuarioProvider;