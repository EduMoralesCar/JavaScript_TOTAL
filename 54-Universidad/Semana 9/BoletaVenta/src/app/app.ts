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
  items: { nombreCliente: string; nombreProducto: string; cantidad: number; precioUnitario: number }[] = [];

  // Datos del formulario
  nombreCliente = signal('');
  nombreProducto = signal('');
  cantidad = signal(1);
  precioUnitario = signal(0);
  total = signal(0);

  // Agregar Productos
  agregar() {
    if (this.nombreCliente() && this.nombreProducto() && this.cantidad() > 0 && this.precioUnitario() > 0) {
      this.items.push({
        nombreCliente: this.nombreCliente(),
        nombreProducto: this.nombreProducto(),
        cantidad: this.cantidad(),
        precioUnitario: this.precioUnitario()
      });
      this.total.set(this.total() + this.cantidad() * this.precioUnitario());

      // Limpiar campos
      this.nombreCliente.set('');
      this.nombreProducto.set('');
      this.cantidad.set(1);
      this.precioUnitario.set(0);
    }
  }

  // Total
  calcularTotal() {
    return this.items.reduce((acc, item) => acc + item.cantidad * item.precioUnitario, 0);
  }

  // IGV
  calcularIGV() {
    return this.calcularTotal() * 0.18;
  }
}