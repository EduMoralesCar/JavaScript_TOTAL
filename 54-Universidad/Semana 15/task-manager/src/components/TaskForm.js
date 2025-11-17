import React from 'react';
import { ESTADOS } from '../config/taskConfig';

const TaskForm = ({ formulario, usuarios, editando, onChange, onAsignacion, onSubmit, onCancel, onClear }) => {
    return (
        <form onSubmit={onSubmit} className="card p-3">
            <div className="mb-2 d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{editando ? 'Editar Tarea' : 'Nueva Tarea'}</h5>
                {editando && (
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={onCancel}>
                        Cancelar
                    </button>
                )}
            </div>

            <div className="mb-2">
                <input name="titulo" value={formulario.titulo} onChange={onChange} className="form-control" placeholder="Título" />
            </div>

            <div className="mb-2">
                <textarea name="descripcion" value={formulario.descripcion} onChange={onChange} className="form-control" placeholder="Descripción" rows={3} />
            </div>

            <div className="row">
                <div className="col-md-6 mb-2">
                    <label className="form-label small">Fecha de vencimiento</label>
                    <input name="fechaVencimiento" value={formulario.fechaVencimiento} onChange={onChange} type="date" className="form-control" />
                </div>
                <div className="col-md-6 mb-2">
                    <label className="form-label small">Estado</label>
                    <select name="estado" value={formulario.estado} onChange={onChange} className="form-select">
                        {Object.keys(ESTADOS).map(key => (
                            <option key={key} value={key}>{ESTADOS[key].etiqueta}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mb-2">
                    <label className="form-label small">Asignar usuario</label>
                    <select className="form-select" value={(formulario.assignedUserIds && formulario.assignedUserIds[0]) || ''} onChange={onAsignacion}>
                        <option value="">— Ninguno —</option>
                        {usuarios.map(u => (
                            <option key={u.id} value={u.id}>{u.name}</option>
                        ))}
                    </select>
                    <div className="form-text">Selecciona un usuario para asignar a la tarea.</div>
                </div>
            </div>

            <div className="mt-2 d-flex gap-2">
                <button className="btn btn-primary" type="submit">{editando ? 'Guardar cambios' : 'Agregar tarea'}</button>
                <button type="button" className="btn btn-secondary" onClick={onClear}>Limpiar</button>
            </div>
        </form>
    );
};

export default TaskForm;
