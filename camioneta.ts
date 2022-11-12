/*Ejercicios - Entregable
Tomar dos ejercicios a elección que hayan 
hecho antes, y modificar la validación de los 
datos para hacerla empleando errores.
Al menos uno de ellos, debe ser un error 
personalizado.
(Escuela, Turnos)
Fecha de entrega 18/11*/

class Camionetas{ 
    protected velocidadActual : number;
    private estaPrendido : boolean;

    public constructor (){ 
        this.velocidadActual = this.velocidadActual;
        this.estaPrendido = true;
}

    public prender (): void{ 
        this.estaPrendido = true
}
    public apagar (): void{ 
    this.estaPrendido= false;
}

    public acelerar (): void {
        if (this.velocidadActual < 15) {
            throw new Error ("No está acelerando demasiado")
        }else if (this.velocidadActual > 15){
            throw new Error ("Acelera demasiado")
        }else (this.velocidadActual == 15); {
            console.log ("La velocidad actual es correcta")
        }
        this.velocidadActual=67;


}
}
let camioneta2: Camionetas = new Camionetas ();

camioneta2.acelerar();

console.log (camioneta2);

try{
    camioneta2.acelerar();
}catch(error){
    console.log("Dato invalido " + error.message)
}
