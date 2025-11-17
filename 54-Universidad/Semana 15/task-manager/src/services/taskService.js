const CLAVE_ALMACENAMIENTO = 'taskmanager_tasks_v1';

async function obtenerTareas() {
  try {
    const raw = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('servicio.obtenerTareas error', e);
    return [];
  }
}

async function guardarTareas(tareas) {
  try {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(tareas));
    return true;
  } catch (e) {
    console.error('servicio.guardarTareas error', e);
    return false;
  }
}

async function crearTarea(payload) {
  const tareas = await obtenerTareas();
  const nueva = { ...payload, id: Date.now() };
  tareas.unshift(nueva);
  await guardarTareas(tareas);
  return nueva;
}

async function actualizarTarea(id, payload) {
  const tareas = await obtenerTareas();
  const idx = tareas.findIndex(t => String(t.id) === String(id));
  if (idx === -1) return null;
  tareas[idx] = { ...tareas[idx], ...payload, id };
  await guardarTareas(tareas);
  return tareas[idx];
}

async function eliminarTarea(id) {
  const tareas = await obtenerTareas();
  const next = tareas.filter(t => String(t.id) !== String(id));
  await guardarTareas(next);
  return next;
}

async function obtenerUsuarios() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('No OK');
    const ext = await res.json();
    return ext.map(u => ({ id: `ext-${u.id}`, name: u.name, email: u.email }));
  } catch (e) {
    console.warn('servicio.obtenerUsuarios fallback empty', e);
    return [];
  }
}

export { obtenerTareas, guardarTareas, crearTarea, actualizarTarea, eliminarTarea, obtenerUsuarios };
