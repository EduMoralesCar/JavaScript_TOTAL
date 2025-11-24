<template>
  <div class="container my-4">
    <h2 class="mb-4 text-primary fw-bold">Gestor de Tareas</h2>

    <!-- Formulario -->
    <div class="card mb-4">
      <div class="card-body">
        <form @submit.prevent="saveTask">
          <div class="row g-5">
            <div class="col-md-4">
              <label class="form-label fw-bold">Título*</label>
              <input v-model="form.title" type="text" class="form-control" placeholder="Ej. Comprar material" />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Descripción*</label>
              <input v-model="form.description" type="text" class="form-control" placeholder="Descripción breve" />
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Prioridad*</label>
              <select v-model="form.priority" class="form-select">
                <option value="null" disabled selected class="text-muted">Seleccione</option>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
          </div>

          <div class="row g-2 mt-3">
            <div class="col-md-3">
              <label class="form-label fw-bold">Fecha límite*</label>
              <input v-model="form.due" type="date" class="form-control" />
            </div>

            <div class="col-md-9 d-flex align-items-end justify-content-end">
              <button type="submit" class="btn btn-primary me-2">
                {{ isEditing ? 'Actualizar' : 'Crear' }}
              </button>
              <button type="button" class="btn btn-secondary me-2" @click="resetForm">Limpiar</button>
              <button v-if="isEditing" type="button" class="btn btn-outline-danger" @click="cancelEdit">Cancelar edición</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Lista de tareas -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tareas ({{ tasks.length }})</h5>
        <div v-if="tasks.length === 0" class="text-muted">No hay tareas todavía.</div>

        <div v-else class="list-group">
          <div
            v-for="task in sortedTasks"
            :key="task.id"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
          >
            <div class="ms-2 me-auto">
              <div class="d-flex align-items-center">
                <input class="form-check-input me-2" type="checkbox" v-model="task.done" @change="toggleDone(task.id)" />
                <h6 :class="{ 'text-decoration-line-through': task.done }" class="mb-0">{{ task.title }}</h6>
                <span class="badge ms-2" :class="priorityClass(task.priority)">{{ task.priority }}</span>
              </div>
              <small class="text-muted">{{ task.description }}</small>
              <div>
                <small class="text-muted">Vence: {{ formatDate(task.due) }}</small>
              </div>
            </div>

            <div class="btn-group">
              <button class="btn btn-sm btn-primary me-2" @click="startEdit(task)">Editar</button>
              <button class="btn btn-sm btn-danger" @click="deleteTask(task.id)">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const tasks = ref([])

const form = reactive({
  id: null,
  title: '',
  description: '',
  priority: 'null',
  due: '',
  done: false
})

const isEditing = computed(() => form.id !== null)

function resetForm() {
  form.id = null
  form.title = ''
  form.description = ''
  form.priority = 'media'
  form.due = ''
  form.done = false
}

function saveTask() {
  if (!form.title.trim()) {
    alert('El título es requerido.')
    return
  }

  if (isEditing.value) {
    const idx = tasks.value.findIndex(t => t.id === form.id)
    if (idx !== -1) {
      tasks.value[idx] = { ...tasks.value[idx], ...toPlain(form) }
    }
  } else {
    const newTask = { ...toPlain(form), id: generateId() }
    tasks.value.push(newTask)
  }

  resetForm()
}

function startEdit(task) {
  form.id = task.id
  form.title = task.title
  form.description = task.description
  form.priority = task.priority
  form.due = task.due
  form.done = task.done
}

function cancelEdit() {
  resetForm()
}

function deleteTask(id) {
  if (!confirm('¿Eliminar esta tarea?')) return
  tasks.value = tasks.value.filter(t => t.id !== id)
  if (form.id === id) resetForm()
}

function toggleDone(id) {
  const t = tasks.value.find(x => x.id === id)
  if (t) t.done = !t.done
}

function priorityClass(priority) {
  return {
    'bg-success text-white': priority === 'baja',
    'bg-warning text-dark': priority === 'media',
    'bg-primary text-white': priority === 'alta'
  }
}

function formatDate(d) {
  if (!d) return '—'
  try {
    const date = new Date(d)
    return date.toLocaleDateString()
  } catch {
    return d
  }
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function toPlain(obj) {
  return JSON.parse(JSON.stringify(obj))
}

const sortedTasks = computed(() => {
  // Orden básico: no hechas primero, luego por prioridad alta->baja, luego fecha
  const priorityRank = { alta: 0, media: 1, baja: 2 }
  return [...tasks.value].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1
    if (priorityRank[a.priority] !== priorityRank[b.priority]) return priorityRank[a.priority] - priorityRank[b.priority]
    if (a.due && b.due) return new Date(a.due) - new Date(b.due)
    if (a.due) return -1
    if (b.due) return 1
    return 0
  })
})
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
.card {
  border-radius: 0.5rem;
}
.badge {
  text-transform: capitalize;
  font-size: 0.75rem;
  padding: 0.4em 0.6em;
  margin-left: 0.5rem;
}
</style>