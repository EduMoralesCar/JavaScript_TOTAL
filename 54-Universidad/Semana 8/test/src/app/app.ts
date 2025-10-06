import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Array para almacenar los datos
  items: { nombre: string; apellido: string; dni: string; codigo: string }[] = [];

  // Propiedades del formulario
  nombre = signal('');
  apellido = signal('');
  dni = signal('');
  codigo = signal('');

  // Método para guardar datos
  guardarDatos() {
    if (this.nombre() && this.apellido() && this.dni() && this.codigo()) {
      // Validar DNI (8 dígitos)
      if (this.dni().length !== 8 || !/^\d+$/.test(this.dni())) {
        alert('El DNI debe tener exactamente 8 dígitos');
        return;
      }

      // Agregar al array
      this.items.push({
        nombre: this.nombre(),
        apellido: this.apellido(),
        dni: this.dni(),
        codigo: this.codigo()
      });

      // Limpiar campos
      this.limpiarCampos();

      // Mensaje de éxito
      alert('Datos guardados correctamente');
    } else {
      alert('Por favor complete todos los campos');
    }
  }

  // Método para limpiar campos
  limpiarCampos() {
    this.nombre.set('');
    this.apellido.set('');
    this.dni.set('');
    this.codigo.set('');
  }

  // Método para eliminar registro
  eliminarRegistro(index: number) {
    if (confirm('¿Está seguro de eliminar este registro?')) {
      this.items.splice(index, 1);
    }
  }

  // Obtener total de registros
  getTotalRegistros() {
    return this.items.length;
  }
}