import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
  nuevoEmpleado: string = '';
  empleados: string[] = [];
  agregarEmpleado() {
    if (this.nuevoEmpleado.trim()) {
      this.empleados.push(this.nuevoEmpleado.trim());
      this.nuevoEmpleado = '';
    }
  }
}