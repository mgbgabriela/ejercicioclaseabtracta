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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Automovil = /** @class */ (function () {
    function Automovil() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Automovil.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Automovil.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    return Automovil;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return AutoCiudad;
}(Automovil));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidadActual += 15;
    };
    return Camioneta;
}(Automovil));
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    return AutoCarrera;
}(Automovil));
var autoCiudad1 = new AutoCiudad();
var camioneta1 = new Camioneta();
var autoCarrera1 = new AutoCarrera();
autoCiudad1.acelerar();
camioneta1.acelerar();
autoCarrera1.acelerar();
console.log(autoCiudad1);
console.log(camioneta1);
console.log(autoCarrera1);
