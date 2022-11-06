/*Ejercicio 2
•
Iniciar proyecto NPM
•
Implementar las siguientes clases con las
variables y métodos que crea necesarios:
•
AutoCiudad
•
AutoDeportivo
•
Camioneta
•
Abstraer elementos en común entre dichas
clases → pasarlos a una clase abstracta, y
que las tres clases extiendan de ella*/

abstract class Automovil{ 
    protected velocidadActual : number
    private estaPrendido : boolean

    public constructor (){ 
        this.velocidadActual = 0
        this.estaPrendido = false
}
    abstract acelerar (): void;

    public prender (): void{ 
        this.estaPrendido = true
}
    public apagar (): void{ 
    this.estaPrendido= false;
}

}

class AutoCiudad extends Automovil {
    
    public acelerar (): void { 
    this.velocidadActual += 10;
}
}

class Camioneta extends Automovil {



    public acelerar (): void { 
    this.velocidadActual += 15;
}
}

class AutoCarrera extends Automovil {
    
    public acelerar (): void { 
    this.velocidadActual += 50;
}
}
let autoCiudad1 : AutoCiudad = new AutoCiudad();
let camioneta1:Camioneta = new Camioneta();
let autoCarrera1: AutoCarrera = new AutoCarrera();
autoCiudad1.acelerar();
camioneta1.acelerar();
autoCarrera1.acelerar();
console.log(autoCiudad1);
console.log (camioneta1);
console.log (autoCarrera1);