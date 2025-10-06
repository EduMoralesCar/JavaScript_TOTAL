export class Empleado {
    id: number;
    nombre: string;
    apellido: string;
    cargo: string;
    salario: number;
    fechaContrato: Date;

    constructor(id: number, nombre: string, apellido: string, cargo: string, salario: number, fechaContrato: Date) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.salario = salario;
        this.fechaContrato = fechaContrato;
    }
}
