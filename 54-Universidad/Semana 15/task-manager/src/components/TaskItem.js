import React from 'react';
import { ESTADOS } from '../config/taskConfig';

const TaskItem = ({ tarea, usuarios, onEdit, onDelete }) => {
    const firstAssigned = (tarea.assignedUserIds && tarea.assignedUserIds.length > 0) ? tarea.assignedUserIds[0] : null;
    const assignedUser = firstAssigned ? usuarios.find(x => String(x.id) === String(firstAssigned)) : null;

    return (
        <li className="list-group-item" key={tarea.id}>
            <div className="w-100">
                <div className="row align-items-start">
                    <div className="col-12 col-md-7">
                        <div className="fw-bold">{tarea.title || tarea.titulo}</div>
                        <div className="small text-muted">Vence: {tarea.dueDate || tarea.fechaVencimiento || '—'}</div>
                        <div className="mt-1">{tarea.description || tarea.descripcion}</div>
                    </div>

                    <div className="col-12 col-md-3 d-flex flex-column align-items-center mt-2 mt-md-0">
                        <div className="small text-muted mb-1">Asignado</div>
                        {assignedUser ? (
                            <span className="badge bg-info text-dark">{assignedUser.name}</span>
                        ) : (
                            <div className="text-muted">—</div>
                        )}
                    </div>

                    <div className="col-12 col-md-2 d-flex flex-column align-items-end mt-2 mt-md-0">
                        <span className={`badge bg-${ESTADOS[tarea.status || tarea.estado]?.badge || 'secondary'} mb-2`}>{ESTADOS[tarea.status || tarea.estado]?.etiqueta || (tarea.status || tarea.estado)}</span>
                        <div>
                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => onEdit(tarea)}>Editar</button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(tarea.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;
