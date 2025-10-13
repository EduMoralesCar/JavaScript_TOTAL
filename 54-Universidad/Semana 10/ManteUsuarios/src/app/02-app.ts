import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './01-app.html',
  styleUrl: './app.css'
})
export class App {
  usuarios:{nombre: string,correo:string}[]=[]; //listas/arreglo
  //Formulario para llevar datos
  nuevoUsuario={
    nombre:'',
    correo:''
  };
  //Actualizar Usuario
  editIndex: number | null=null;
  //Guardar Usuario 
  guardar(){
    if(!this.nuevoUsuario.nombre.trim() || !this.nuevoUsuario.correo.trim()) 
      return;
    if (this.editIndex===null)
    {
      this.usuarios.push({...this.nuevoUsuario});
    }else
      this.usuarios[this.editIndex]={...this.nuevoUsuario};
      this.editIndex=null
    }
  editar(index: number){
    this.nuevoUsuario={...this.usuarios[index]};
    this.editIndex=index;
    
  }
  eliminar(index: number){ //Eliminar un Usuario
    this.usuarios.splice(index,1);
  }
}