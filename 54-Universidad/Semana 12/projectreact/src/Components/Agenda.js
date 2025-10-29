/*
Agenda de notas: crear, editar y eliminar. Cada nota muestra un contador desde su última edición.
*/
import React, { useState, useEffect, useReducer } from 'react';

const notasTiempo = (state, action) => {
    switch (action.type) {
        case 'AGREGAR_NOTA':
            return [...state, { id: Date.now(), contenido: action.payload, ultimaEdicion: null }];
        case 'EDITAR_NOTA':
            return state.map(nota =>
                nota.id === action.payload.id
                    ? { ...nota, contenido: action.payload.contenido, ultimaEdicion: Date.now() }
                    : nota
            );
        case 'ELIMINAR_NOTA':
            return state.filter(nota => nota.id !== action.payload);
        default:
            return state;
    }
};

function Agenda() {
    const [notas, dispatch] = useReducer(notasTiempo, []);
    const [nuevoContenido, setNuevoContenido] = useState('');

    const agregarNota = () => {
        const text = (nuevoContenido || '').trim();
        if (!text) return;
        dispatch({ type: 'AGREGAR_NOTA', payload: text });
        setNuevoContenido('');
    };

    const editarNota = (id, contenido) => {
        dispatch({ type: 'EDITAR_NOTA', payload: { id, contenido } });
    };

    const eliminarNota = (id) => {
        dispatch({ type: 'ELIMINAR_NOTA', payload: id });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3">Agenda de Notas</h2>

            <div className="mb-3">
                <div className="input-group">
                    <textarea
                        className="form-control"
                        placeholder="Escribe una nueva nota..."
                        value={nuevoContenido}
                        onChange={(e) => setNuevoContenido(e.target.value)}
                        rows={3}
                    />
                    <button className="btn btn-primary" onClick={agregarNota}>Agregar Nota</button>
                </div>
            </div>

            <div className="row">
                {notas.length === 0 && (
                    <div className="col-12">
                        <div className="alert alert-info">No hay notas aún. Agrega la primera nota.</div>
                    </div>
                )}

                {notas.map(nota => (
                    <div className="col-md-6 mb-3" key={nota.id}>
                        <Note
                            nota={nota}
                            onEditar={editarNota}
                            onEliminar={eliminarNota}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Note({ nota, onEditar, onEliminar }) {
    const [contenido, setContenido] = useState(nota.contenido || '');
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const actualizar = () => {
            const tiempoTranscurrido = nota.ultimaEdicion ? Math.floor((Date.now() - nota.ultimaEdicion) / 1000) : 0;
            setContador(tiempoTranscurrido);
        };

        actualizar();
        const intervalo = setInterval(actualizar, 1000);
        return () => clearInterval(intervalo);
    }, [nota.ultimaEdicion]);

    const handleChange = (e) => {
        setContenido(e.target.value);
    };

    const handleSave = () => {
        onEditar(nota.id, contenido);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Nota #{nota.id}</h5>
                <textarea
                    className="form-control mb-2"
                    value={contenido}
                    onChange={handleChange}
                    rows={4}
                />

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {nota.ultimaEdicion ? (
                            <small className="text-muted">Tiempo desde última edición: {contador}s</small>
                        ) : (
                            <small className="text-muted">Nunca editada</small>
                        )}
                    </div>

                    <div>
                        <button className="btn btn-sm btn-success me-2" onClick={handleSave}>Guardar</button>
                        <button className="btn btn-sm btn-danger" onClick={() => onEliminar(nota.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agenda;