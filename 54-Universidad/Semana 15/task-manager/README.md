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

Cambiar el color de fondo global
- Edita `src/index.css` y modifica la variable `--app-bg` en la parte superior. Por ejemplo:

```css
:root { --app-bg: #0b2740; }
```

Notas de diseño y futuro trabajo
- Si en el futuro quieres tener un backend real, todos los accesos a datos están centralizados en `src/services/taskService.js` para facilitar el cambio.
- Posibles mejoras rápidas: asignación múltiple (multi-select), avatars para usuarios, tooltips con email, o persistencia remota con `json-server` o una pequeña API Express.

Problemas comunes
- Si ves warnings sobre PowerShell y `npm start` en Windows (ejecución de scripts deshabilitada), ejecuta `npm.cmd start` o cambia la política de ejecución con precaución.

Commit sugerido
- `fix(readme): documentar task-manager — persistencia, estructura y estilo`

Contacto
- Proyecto mantenido por el autor del curso. Para cambios en la estructura, editar los archivos en `src/components` y `src/services`.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
