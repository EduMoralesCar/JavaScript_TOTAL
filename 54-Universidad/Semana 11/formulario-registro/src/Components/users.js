import React, { useState, useCallback } from 'react';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    const resetForm = () => {
        setFormData({ name: '', email: '', password: '' });
        setEditIndex(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password
        };
        if (!data.name || !data.email || !data.password) return;

        if (editIndex !== null) {
            // actualizar
            setUsers((prev) => prev.map((u, i) => (i === editIndex ? data : u)));
        } else {
            // agregar
            setUsers((prev) => [...prev, data]);
        }
        resetForm();
    };

    const startEdit = (index) => {
        setFormData(users[index]);
        setEditIndex(index);
    };

    const removeUser = (i) => {
        // elimina el usuario
        setUsers((prev) => prev.filter((_, idx) => idx !== i));
        if (editIndex === i) resetForm();
    };

    return (
        <div className="app-container">
            <div className="card shadow">
                <div className="card-header">
                    <h2 className="m-0">{editIndex !== null ? 'Actualizar Usuario' : 'Registro de Usuarios'}</h2>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit} className="grid">
                        <div className="field">
                            <label>Nombre</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ej: Juan"
                            />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Ej: juan@mail.com"
                            />
                        </div>
                        <div className="field">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="btn-row">
                            <button type="submit" className="btn btn-primary">
                                {editIndex !== null ? 'Actualizar' : 'Registrar'}
                            </button>
                            {editIndex !== null && (
                                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="card shadow mt-16">
                <div className="card-header alt">
                    <h3 className="m-0">Usuarios Registrados</h3>
                </div>
                <div className="card-body">
                    {users.length === 0 ? (
                        <p className="muted">Sin usuarios. Agrega el primero.</p>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover align-middle">
                                <thead className="table-dark">
                                    <tr>
                                        <th style={{ width: '60px' }}>ID</th>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th style={{ width: '180px' }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((u, i) => (
                                        <tr key={i}>
                                            <td className="fw-bold">{i + 1}</td>
                                            <td>{u.name}</td>
                                            <td className="text-muted">{u.email}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <button className="btn btn-success btn-sm" onClick={() => startEdit(i)}>
                                                        Actualizar
                                                    </button>
                                                    <button className="btn btn-danger btn-sm" onClick={() => removeUser(i)}>
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}