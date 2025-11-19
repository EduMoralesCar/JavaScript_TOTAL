# Task Manager — Proyecto de ejemplo
Este repositorio contiene la aplicación **Task Manager**, una pequeña SPA en React creada como ejercicio para la semana del curso. Está pensada para gestionar tareas localmente (persistencia en `localStorage`) y usar un endpoint público para la lista de usuarios.
**Resumen rápido**
- **Frontend:** React (Create React App) + Bootstrap.
- **Persistencia:** `localStorage` con la clave `taskmanager_tasks_v1`.
- **Usuarios:** se cargan desde `https://jsonplaceholder.typicode.com/users` (solo lectura).
- **Servicios:** la lógica de lectura/escritura está en `src/services/taskService.js`.

**Estructura relevante**
- `src/components/TaskApp.js` — componente principal (estado y handlers).
- `src/components/TaskForm.js` — formulario para crear/editar tareas.
- `src/components/TaskList.js` — lista de tareas.
- `src/components/TaskItem.js` — item de tarea (badge de estado, botones).
- `src/services/taskService.js` — abstracción de persistencia y fetch de usuarios.
- `src/config/taskConfig.js` — constantes: `ESTADOS`, `CLAVE_ALMACENAMIENTO`, `tareaPorDefecto`.
- `src/index.css` — estilos globales (aquí puedes cambiar el `--app-bg`).

Cómo correr (desarrollo)
1. Instala dependencias: `npm install` (solo si no lo has hecho).
2. Ejecuta la app: `npm start`.
3. Abre `http://localhost:3000`.

Puntos importantes sobre persistencia y comportamiento
- La app guarda las tareas en `localStorage` usando `CLAVE_ALMACENAMIENTO = 'taskmanager_tasks_v1'`.
- Para evitar que los datos se sobrescriban al recargar, el estado inicial de `tareas` se inicializa leyendo `localStorage` sincrónicamente.
- Las tareas pueden contener el campo `assignedUserIds` (array). Actualmente la UI permite asignar un único usuario pero se conserva la estructura para admitir múltiples asignados en el futuro.
# Task Manager — Breve

Aplicación de ejemplo en React para gestionar tareas a nivel local. El proyecto es intencionalmente pequeño y pensado para práctica y aprendizaje.

Instrucciones rápidas

- Clonar el repositorio:

```bash
git clone https://github.com/EduMoralesCar/JavaScript_TOTAL.git
cd JavaScript_TOTAL/54-Universidad/Semana\ 15/task-manager
```

- Instalar dependencias y ejecutar en modo desarrollo:

```bash
npm install
npm start
```

- Abrir en el navegador: `http://localhost:3000`.

Notas útiles

- Persistencia: las tareas se guardan en `localStorage` con la clave `taskmanager_tasks_v1`.
- Usuarios: la lista de usuarios se obtiene desde `https://jsonplaceholder.typicode.com/users` (lectura).
- Cambiar color de fondo global: editar `src/index.css` y modificar `--app-bg`.

Más información

- Estructura principal: `src/components` (UI), `src/services` (persistencia) y `src/config` (constantes).
- Si quieres agregar un backend real, la lógica de datos está centralizada en `src/services/taskService.js`.

Licencia / Créditos

Proyecto educativo. Modifica y usa para práctica.
