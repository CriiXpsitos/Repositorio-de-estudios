class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre
        this._sueldo = sueldo
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

    nombreCompleto(){
        return this._nombre
    }
}


class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento
    }

    obtenerDetalles(){
        return `Gerente: ${this.nombreCompleto()} departamento: ${this._departamento}`
    }
}


let gerente1 = new Gerente("cristian", "peña", "sistemas")

console.log(gerente1.obtenerDetalles())


