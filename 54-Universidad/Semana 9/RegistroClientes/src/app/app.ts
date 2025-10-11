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
  clientes: {
    nombre_cliente: string,
    apellido_cliente: string,
    email_cliente: string,
    pais_cliente: string
  }[] = [];


  nuevo_cliente = {
    nombre_cliente: '',
    apellido_cliente: '',
    email_cliente: '',
    pais_cliente: ''
  };

  registrar() {
    if (this.nuevo_cliente.nombre_cliente.trim() && this.nuevo_cliente.apellido_cliente.trim() && this.nuevo_cliente.email_cliente.trim() && this.nuevo_cliente.pais_cliente.trim()) {
      this.clientes.push({ ...this.nuevo_cliente });
      this.nuevo_cliente = {
        nombre_cliente: '',
        apellido_cliente: '',
        email_cliente: '',
        pais_cliente: ''
      };

      /*
      this.clientes.push({
        nombre_cliente: this.nombre_cliente,
        apellido_cliente: this.apellido_cliente,
        email_cliente: this.email_cliente,
        pais_cliente: this.pais_cliente
      });
      this.nombre_cliente = '';
      this.apellido_cliente = '';
      this.email_cliente = '';
      this.pais_cliente = '';
      */
    }
  }

  eliminar(cliente: any) {
    this.clientes = this.clientes.filter(c => c !== cliente);
  }
}
