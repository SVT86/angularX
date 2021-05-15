export class Persona {
    private nombre: string;
    private apellido: string;
    private edad: number;

    public constructor(nombre: string, apellido: string, edad: number = 50) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };
    public getPersona(): string {
        return this.nombre + " " + this.apellido + " " + this.edad;
    }

}