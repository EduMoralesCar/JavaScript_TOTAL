import { useState, useEffect, useMemo } from 'react';

const ESTADOS = {
    pendiente: { etiqueta: 'Pendiente', badge: 'secondary' },
    'en progreso': { etiqueta: 'En Progreso', badge: 'primary' },
    revision: { etiqueta: 'Revisión', badge: 'warning' },
    bloqueado: { etiqueta: 'Bloqueado', badge: 'danger' },
    finalizado: { etiqueta: 'Finalizado', badge: 'success' },
    cancelado: { etiqueta: 'Cancelado', badge: 'dark' },
};

const CLAVE_ALMACENAMIENTO = 'taskmanager_tasks_v1';

const tareaPorDefecto = () => ({
    id: null,
    titulo: '',
    descripcion: '',
    fechaCreacion: '',
    fechaVencimiento: '',
    estado: 'pendiente',
});

const TaskApp = () => {
    const [tareas, setTareas] = useState(() => {
        try {
            const raw = localStorage.getItem(CLAVE_ALMACENAMIENTO);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('Error leyendo localStorage', e);
            return [];
        }
    });

    const [filtro, setFiltro] = useState('all');
    const [editando, setEditando] = useState(null);
    const [formulario, setFormulario] = useState(tareaPorDefecto());

    useEffect(() => {
        try {
            localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(tareas));
        } catch (e) {
            console.error('Error guardando tareas', e);
        }
    }, [tareas]);

    // ordenar por fecha de vencimiento ascendente
    const tareasOrdenadas = useMemo(() => {
        return [...tareas].sort((a, b) => {
            if (!a.dueDate && !a.fechaVencimiento) return 1;
            const ad = a.dueDate || a.fechaVencimiento || '';
            const bd = b.dueDate || b.fechaVencimiento || '';
            if (!ad) return 1;
            if (!bd) return -1;
            return new Date(ad) - new Date(bd);
        });
    }, [tareas]);

    const tareasVisibles = useMemo(() => {
        if (filtro === 'all') return tareasOrdenadas;
        return tareasOrdenadas.filter(t => (t.status || t.estado) === filtro);
    }, [tareasOrdenadas, filtro]);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario(prev => ({ ...prev, [name]: value }));
    };

    const manejarAgregar = (e) => {
        e.preventDefault();
        const titulo = formulario.title || formulario.titulo || '';
        if (!titulo.trim()) return alert('El título es requerido');

        const ahora = new Date();
        if (editando) {
            setTareas(prev => prev.map(t => t.id === editando ? { ...t, ...formulario } : t));
            setEditando(null);
        } else {
            const nueva = {
                ...formulario,
                id: Date.now(),
                createdAt: ahora.toISOString(),
            };
            setTareas(prev => [nueva, ...prev]);
        }
        setFormulario(tareaPorDefecto());
    };

    const manejarEditar = (task) => {
        setEditando(task.id);
        setFormulario({ ...task });
    };

    const manejarEliminar = (id) => {
        if (!window.confirm('¿Eliminar esta tarea?')) return;
        setTareas(prev => prev.filter(t => t.id !== id));
    };

    const manejarLimpiarTodo = () => {
        if (!window.confirm('¿Borrar todas las tareas?')) return;
        setTareas([]);
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 fw-bold text-primary">Gestor de Tareas</h1>

            <div className="row mb-3">
                <div className="col-md-8">
                    <form onSubmit={manejarAgregar} className="card p-3">
                        <div className="mb-2 d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">{editando ? 'Editar Tarea' : 'Nueva Tarea'}</h5>
                            {editando && (
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => { setEditando(null); setFormulario(tareaPorDefecto()); }}>
                                    Cancelar
                                </button>
                            )}
                        </div>

                        <div className="mb-2">
                            <input name="titulo" value={formulario.titulo} onChange={manejarCambio} className="form-control" placeholder="Título" />
                        </div>

                        <div className="mb-2">
                            <textarea name="descripcion" value={formulario.descripcion} onChange={manejarCambio} className="form-control" placeholder="Descripción" rows={3} />
                        </div>

                        <div className="row">
                                <div className="col-md-6 mb-2">
                                <label className="form-label small">Fecha de vencimiento</label>
                                <input name="fechaVencimiento" value={formulario.fechaVencimiento} onChange={manejarCambio} type="date" className="form-control" />
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="form-label small">Estado</label>
                                <select name="estado" value={formulario.estado} onChange={manejarCambio} className="form-select">
                                    {Object.keys(ESTADOS).map(key => (
                                        <option key={key} value={key}>{ESTADOS[key].etiqueta}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mt-2 d-flex gap-2">
                            <button className="btn btn-primary" type="submit">{editando ? 'Guardar cambios' : 'Agregar tarea'}</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setFormulario(tareaPorDefecto())}>Limpiar</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-4">
                    <div className="card p-3">
                        <h6>Filtros</h6>
                        <select className="form-select mb-2" value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                            <option value="all">Todos</option>
                            {Object.keys(ESTADOS).map(k => (
                                <option key={k} value={k}>{ESTADOS[k].etiqueta}</option>
                            ))}
                        </select>

                        <div className="d-grid gap-2">
                            <button className="btn btn-outline-danger" onClick={manejarLimpiarTodo}>Limpiar todas</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Tareas ({tareasVisibles.length})</h5>

                    {tareasVisibles.length === 0 ? (
                        <div className="alert alert-info">No hay tareas para mostrar.</div>
                    ) : (
                        <ul className="list-group">
                            {tareasVisibles.map(tarea => (
                                <li className="list-group-item d-flex justify-content-between align-items-start" key={tarea.id}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{tarea.title || tarea.titulo}</div>
                                        <div className="small text-muted">Vence: {tarea.dueDate || tarea.fechaVencimiento || '—'}</div>
                                        <div className="mt-1">{tarea.description || tarea.descripcion}</div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                        <span className={`badge bg-${ESTADOS[tarea.status || tarea.estado]?.badge || 'secondary'} mb-2`}>{ESTADOS[tarea.status || tarea.estado]?.etiqueta || (tarea.status || tarea.estado)}</span>
                                        <div>
                                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => manejarEditar(tarea)}>Editar</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => manejarEliminar(tarea.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskApp;