import { Component } from '@angular/core';
import { PersonaComponent } from "../persona/persona.component";

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';

  agregarPersona(){
    this.mensaje = 'Persona Agregada';
  }

}
