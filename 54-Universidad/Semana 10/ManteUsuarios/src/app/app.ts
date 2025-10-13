import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Listas/Arreglos
  usuarios: {
    nombre: string,
    correo: string
  }[] = [];

  // Formulario para llenar datos
  nuevo_usuario = {
    nombre: '',
    correo: ''
  }

  //Actualizar Usuario
  editIndex: number | null = null;

  //Guardar Usuario 
  guardar() {
    if (!this.nuevo_usuario.nombre.trim() || !this.nuevo_usuario.correo.trim())
      return;
    if (this.editIndex === null) {
      this.usuarios.push({ ...this.nuevo_usuario });
    } else
      this.usuarios[this.editIndex] = { ...this.nuevo_usuario };
    this.editIndex = null;

    // Limpiar el formulario
    this.nuevo_usuario = { nombre: '', correo: '' };
  }


  // Eliminar un usuario
  eliminar(index: number) {
    this.usuarios.splice(index, 1);
  }

  // Actualizar Usuario
  actualizar(index: number) {
    this.nuevo_usuario = { ...this.usuarios[index] };
    this.editIndex = index;
  }
}
