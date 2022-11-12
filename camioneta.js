/*Ejercicios - Entregable
Tomar dos ejercicios a elección que hayan
hecho antes, y modificar la validación de los
datos para hacerla empleando errores.
Al menos uno de ellos, debe ser un error
personalizado.
(Escuela, Turnos)
Fecha de entrega 18/11*/
var Camionetas = /** @class */ (function () {
    function Camionetas() {
        this.velocidadActual = this.velocidadActual;
        this.estaPrendido = true;
    }
    Camionetas.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Camionetas.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Camionetas.prototype.acelerar = function () {
        if (this.velocidadActual < 15) {
            throw new Error("No está acelerando demasiado");
        }
        else if (this.velocidadActual > 15) {
            throw new Error("Acelera demasiado");
        }
        else
            (this.velocidadActual == 15);
        {
            console.log("La velocidad actual es correcta");
        }
        this.velocidadActual = 67;
    };
    return Camionetas;
}());
var camioneta2 = new Camionetas();
var camioneta3 = new Camionetas();
camioneta3.acelerar();
console.log(camioneta3);
try {
    camioneta3.acelerar();
}
catch (error) {
    console.log("Dato invalido " + error.message);
}
