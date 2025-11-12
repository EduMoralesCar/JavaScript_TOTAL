import React, { useState } from "react";
import useFetchUser from "../hooks/useFetchUser";

function UserProfile() {
    // 1. Estado para el ID del usuario y uso del hook personalizado
    const [userId, setUserId] = useState(1);
    const { user, loading, error } = useFetchUser(userId);

    if (loading) return <p>Cargando perfil...</p>; // 4. Manejo de estado de carga
    if (error) return <p>Error: {error}</p>; // 5. Manejo de estado de error

    
    const goToNextUser = () => {
        setUserId(currentId => currentId + 1);
    };

    // 6. Botones para cambiar el estado 'userId'
    const goToPreviousUser = () => {
        // Asegurarse de no ir a IDs negativos
        setUserId(currentId => (currentId > 1 ? currentId - 1 : 1));
    };

    return (
        <div>
            {/* 7. Botones para disparar la reactividad */}
            <div>
                <button onClick={goToPreviousUser} disabled={userId === 1}>
                    Usuario Anterior
                </button>
                <button onClick={goToNextUser}>
                    Siguiente Usuario
                </button>
                <p>(Mostrando ID: {userId})</p>
            </div>

            <hr />

            {/* 8. Usar 'user' en lugar de 'data' */}
            {/* También es buena idea comprobar que 'user' no sea null */}
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Teléfono: {user.phone}</p>
                    <p>Sitio Web: {user.website}</p>
                </div>
            )}
        </div>
    );
}

export default UserProfile;