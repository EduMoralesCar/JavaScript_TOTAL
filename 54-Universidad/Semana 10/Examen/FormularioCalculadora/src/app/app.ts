import { Component } from '@angular/core';
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
  title: string = 'Calculadora';

  // Definicion de Variables
  op1: number | null = null;
  op2: number | null = null;
  operation: string = '+';
  resultado: number | string | null = null;

  calcular() {
    const a = this.op1 ?? 0;
    const b = this.op2 ?? 0;

    if (this.operation === 'Raiz') {
      if (a < 0) {
        this.resultado = 'NaN (número negativo)';
        return;
      }
      this.resultado = Math.sqrt(a);
      return;
    }

    switch (this.operation) {
      case '+':
        this.resultado = a + b;
        break;
      case '-':
        this.resultado = a - b;
        break;
      case '*':
        this.resultado = a * b;
        break;
      case '/':
        if (b === 0) {
          this.resultado = 'Error: división por cero';
        } else {
          this.resultado = a / b;
        }
        break;
      default:
        this.resultado = 'Operación no soportada';
    }
  }

  limpiar() {
    this.op1 = null;
    this.op2 = null;
    this.operation = '+';
    this.resultado = null;
  }
}
