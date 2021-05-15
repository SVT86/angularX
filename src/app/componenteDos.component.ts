import { Component } from '@angular/core';
import { Persona } from './Persona.model';


@Component({
    selector: 'app-dos',
    templateUrl: './componenteDos.component.html'
})

export class ComponenteDos {

    private sebastian:Persona = new Persona ("Sebastian","Levi",60);

    public getPersona ():string {
        return this.sebastian.getPersona();
    }

    public marca:string = "Honda";

    public laMarca() {
        alert(this.marca)
    }

    
}