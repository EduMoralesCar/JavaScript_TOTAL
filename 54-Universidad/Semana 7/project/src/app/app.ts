import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule], // Agregado CommonModule para *ngFor
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
  empleadoArray: Empleado[] = [];

  // Propiedades para el formulario
  nombre: string = '';
  apellido: string = '';
  servicio: string = '';
  salario: number = 0;
  fechaIngreso: string = '';

  constructor() {
    // Inicializar con datos de prueba
    this.empleadoArray = [
      new Empleado(1, 'Juan', 'Pérez', 'Desarrollador', 50000, new Date('2020-01-01')),
      new Empleado(2, 'María', 'Gómez', 'Diseñadora', 60000, new Date('2021-02-01')),
      new Empleado(3, 'Pedro', 'López', 'Gerente', 70000, new Date('2019-03-01'))
    ];
  }

  agregarEmpleado() {
    if (this.nombre && this.apellido && this.servicio) {
      const nuevoId = this.empleadoArray.length + 1;
      const nuevoEmpleado = new Empleado(
        nuevoId,
        this.nombre,
        this.apellido,
        this.servicio,
        this.salario,
        new Date(this.fechaIngreso)
      );

      this.empleadoArray.push(nuevoEmpleado);

      // Limpiar campos
      this.nombre = '';
      this.apellido = '';
      this.servicio = '';
      this.salario = 0;
      this.fechaIngreso = '';
    }
  }
}