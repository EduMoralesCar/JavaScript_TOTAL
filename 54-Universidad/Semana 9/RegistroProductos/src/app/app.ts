import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './appv1.html',
  styleUrl: './app.css'
})
export class App {
  productos: {
    nombre_producto: string,
    precio_producto: number,
    categoria_producto: string,
    descripcion_producto: string,
    stock_producto: number
  }[] = [];

  nuevo_producto = {
    nombre_producto: '',
    precio_producto: 0,
    categoria_producto: '',
    descripcion_producto: '',
    stock_producto: 0
  };

  registrar() {
    this.productos.push({ ...this.nuevo_producto });
    this.nuevo_producto = {
      nombre_producto: '',
      precio_producto: 0,
      categoria_producto: '',
      descripcion_producto: '',
      stock_producto: 0
    };
  }

  eliminar() {
    this.productos.pop();
  }

  /*
  eliminar(producto: any) {
    this.productos = this.productos.filter(p => p !== producto);
  }
  */
}
