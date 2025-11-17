export const ESTADOS = {
    pendiente: { etiqueta: 'Pendiente', badge: 'secondary' },
    'en progreso': { etiqueta: 'En Progreso', badge: 'primary' },
    revision: { etiqueta: 'Revisión', badge: 'warning' },
    bloqueado: { etiqueta: 'Bloqueado', badge: 'danger' },
    finalizado: { etiqueta: 'Finalizado', badge: 'success' },
    cancelado: { etiqueta: 'Cancelado', badge: 'dark' },
};

export const CLAVE_ALMACENAMIENTO = 'taskmanager_tasks_v1';

export const tareaPorDefecto = () => ({
    id: null,
    titulo: '',
    descripcion: '',
    fechaCreacion: '',
    fechaVencimiento: '',
    estado: 'pendiente',
    assignedUserIds: []
});
