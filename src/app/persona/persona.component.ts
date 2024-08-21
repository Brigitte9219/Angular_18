import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  nombre: string ='Juan';
  apellido: string ='Perez';
  edad: number =28;
  

  //Asi se utiliza en caso de que la propiedad es PRIVADA

  //private edad: number =28;

  /*getEdad(): number{
    return this.edad;
  }*/

}
