import { useState, useEffect, useMemo } from 'react';
import * as servicio from '../services/taskService';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { ESTADOS, tareaPorDefecto, CLAVE_ALMACENAMIENTO } from '../config/taskConfig';

const TaskApp = () => {
    const [tareas, setTareas] = useState(() => {
        try {
            const raw = localStorage.getItem(CLAVE_ALMACENAMIENTO);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            console.error('Error leyendo tareas desde localStorage', e);
            return [];
        }
    });

    const [usuarios, setUsuarios] = useState([]);

    // cargar usuarios desde JSONPlaceholder (solo lectura) y tareas desde taskService
    useEffect(() => {
        let mounted = true;
        (async () => {
            const u = await servicio.obtenerUsuarios();
            if (mounted) setUsuarios(u);
            const t = await servicio.obtenerTareas();
            if (mounted) setTareas(t);
        })();
        return () => { mounted = false; };
    }, []);

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

    const manejarAsignacion = (e) => {
        const val = e.target.value;
        // guardamos como array para mantener compatibilidad con tareas múltiples
        setFormulario(prev => ({ ...prev, assignedUserIds: val ? [val] : [] }));
    };

    // Nota: la resolución de nombres de usuario se hace ahora en `TaskItem`.

    const manejarAgregar = async (e) => {
        e.preventDefault();
        const titulo = formulario.title || formulario.titulo || '';
        if (!titulo.trim()) return alert('El título es requerido');

        const ahora = new Date();

        // preparar payload con campos actuales del formulario
        const payload = {
            ...formulario,
            titulo: formulario.titulo || formulario.title,
            descripcion: formulario.descripcion || formulario.description,
            fechaCreacion: formulario.fechaCreacion || formulario.createdAt || ahora.toISOString(),
            fechaVencimiento: formulario.fechaVencimiento || formulario.dueDate || '',
            estado: formulario.estado || formulario.status || 'pendiente',
            assignedUserIds: formulario.assignedUserIds || []
        };

        if (editando) {
            const updated = await servicio.actualizarTarea(editando, payload);
            setTareas(prev => prev.map(t => String(t.id) === String(editando) ? updated : t));
            setEditando(null);
        } else {
            const created = await servicio.crearTarea(payload);
            setTareas(prev => [created, ...prev]);
        }

        setFormulario(tareaPorDefecto());
    };

    const manejarEditar = (task) => {
        setEditando(task.id);
        setFormulario({ ...task, assignedUserIds: task.assignedUserIds || [] });
    };

    const manejarEliminar = async (id) => {
        if (!window.confirm('¿Eliminar esta tarea?')) return;
        const next = await servicio.eliminarTarea(id);
        setTareas(next);
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
                    <TaskForm
                        formulario={formulario}
                        usuarios={usuarios}
                        editando={editando}
                        onChange={manejarCambio}
                        onAsignacion={manejarAsignacion}
                        onSubmit={manejarAgregar}
                        onCancel={() => { setEditando(null); setFormulario(tareaPorDefecto()); }}
                        onClear={() => setFormulario(tareaPorDefecto())}
                    />
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

            <TaskList tareas={tareasVisibles} usuarios={usuarios} onEdit={manejarEditar} onDelete={manejarEliminar} />
        </div>
    );
};

export default TaskApp;