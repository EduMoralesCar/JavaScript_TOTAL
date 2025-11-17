import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tareas, usuarios, onEdit, onDelete }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Tareas ({tareas.length})</h5>

                {tareas.length === 0 ? (
                    <div className="alert alert-info">No hay tareas para mostrar.</div>
                ) : (
                    <ul className="list-group">
                        {tareas.map(tarea => (
                            <TaskItem key={tarea.id} tarea={tarea} usuarios={usuarios} onEdit={onEdit} onDelete={onDelete} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TaskList;
