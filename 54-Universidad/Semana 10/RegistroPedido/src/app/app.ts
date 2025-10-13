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
  pedidos: {
    nombre_cliente: string,
    plato: string,
    precio: number,
    stock: number
  }[] = [];

  nuevo_pedido = {
    nombre_cliente: '',
    plato: '',
    precio: null as number | null,
    stock: null as number | null
  };

  registrar() {
    // convertir/parsear a number y validar
    const precioNum = Number(this.nuevo_pedido.precio);
    const stockNum = Number(this.nuevo_pedido.stock);


    if (
      this.nuevo_pedido.nombre_cliente.trim() &&
      this.nuevo_pedido.plato.trim() &&
      !isNaN(precioNum) &&
      precioNum >= 0 &&
      Number.isInteger(stockNum) &&
      stockNum >= 0
    ) {
      this.pedidos.push({
        nombre_cliente: this.nuevo_pedido.nombre_cliente.trim(),
        plato: this.nuevo_pedido.plato.trim(),
        precio: precioNum,
        stock: stockNum
      });

      // reiniciar campos
      this.nuevo_pedido = {
        nombre_cliente: '',
        plato: '',
        precio: null,
        stock: null
      };
    }
  }
}
