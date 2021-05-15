import { Component } from '@angular/core';

@Component({
    selector: 'app-cabecera',
    templateUrl: './cabecera.component.html'
})
export class CabeceraComponent {
    nombre: string = "Sebastian";
    apellido: string = "XXXXvi"
    variable = "Planeta Tierra"

    mostrar(){
        alert(this.variable);
    }

    
}