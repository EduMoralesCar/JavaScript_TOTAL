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
        <div className="container mt-4">
            {/* 7. Botones para disparar la reactividad */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                    className="btn btn-primary fw-bold"
                    onClick={goToPreviousUser}
                    disabled={userId === 1}
                >
                    Usuario Anterior
                </button>

                <p className="mb-0 fw-bold">(Mostrando ID: {userId})</p>

                <button
                    className="btn btn-success fw-bold"
                    onClick={goToNextUser}
                >
                    Siguiente Usuario
                </button>
            </div>

            <hr />

            {/* 8. Usar 'user' en lugar de 'data' */}
            {user && (
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <p className="card-text">
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p className="card-text">
                            <strong>Teléfono:</strong> {user.phone}
                        </p>
                        <p className="card-text">
                            <strong>Sitio Web:</strong>{" "}
                            <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </div>

    );
}

export default UserProfile;