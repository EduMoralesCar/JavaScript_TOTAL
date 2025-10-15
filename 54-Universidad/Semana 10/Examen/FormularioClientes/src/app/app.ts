import { Component, signal } from '@angular/core';
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
  cliente: {
    nombre: string,
    apellido: string,
    dni: number,
    codigo: string,
    correo: string,
    carrera: string
  }[] = [];

  nuevo_cliente = {
    nombre: '',
    apellido: '',
    dni: null as number | null,
    codigo: '',
    correo: '',
    carrera: ''
  }

  // Actualizar cliente
  editarIndex: number | null = null;

  // Agregar cliente
  guardar() {
    const numDni = this.nuevo_cliente.dni || 0;

    if (!this.nuevo_cliente.nombre.trim() || !this.nuevo_cliente.apellido.trim() || !this.nuevo_cliente.dni || !this.nuevo_cliente.codigo.trim() || !this.nuevo_cliente.carrera.trim() || !this.nuevo_cliente.correo.trim())
      return;
    if (this.editarIndex === null) {

      this.cliente.push({ ...this.nuevo_cliente, dni: numDni! });
    } else
      this.cliente[this.editarIndex] = { ...this.nuevo_cliente, dni: numDni! };
    this.editarIndex = null;

    // Reiniciar el formulario
    this.nuevo_cliente = {
      nombre: '',
      apellido: '',
      dni: null,
      codigo: '',
      correo: '',
      carrera: ''
    };
  }

  // Eliminar cliente
  eliminar(index: number) {
    this.cliente.splice(index, 1);
  }

  // Actualizar cliente
  actualizar(index: number) {
    this.nuevo_cliente = { ...this.cliente[index] };
    this.editarIndex = index;
  }
}