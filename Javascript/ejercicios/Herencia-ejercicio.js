class Persona {
    
    static contadorPersona = 0

    constructor(nombre, apellido, edad){
        this._idPersona = Persona.contadorPersona + 1
        this._nombre = nombre,
        this._apellido = apellido,
        this._edad = edad
        Persona.contadorPersona++
    }

    get idPersona(){
        return this._idPersona
    }

    get nombre(){
        return this._nombre
    }

    set setNombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set setApellido(apellido){
        this._apellido = apellido
    }

    get edad(){
        return this._edad    
    }

    set setEdad(edad){
        this._edad = edad
    }

    toString(){
        return `Hola, ${this._nombre} ${this._apellido}, tienes una edad de ${this._edad}`
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = Persona.contadorPersona - 1
        this._sueldo = sueldo
    }

    get idEmpleado(){
        return this._idEmpleado
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return `${super.toString()}, ahora tienes un saldo de ${this._sueldo}`
    }
}

class Cliente extends Persona {
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad)
        this._idCliente = Persona.contadorPersona - 1
        this._fechaRegistro = new Date()
    }

    get idCliente(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }

    set fechaRegistro(date){
        this._fechaRegistro = date
    }

    toString(){
        return `${super.toString()}, fuiste registrado el ${this._fechaRegistro}`
    }
}

const persona1 = new Persona("cristian", "peña", 19)
console.log(Persona.contadorPersona)

console.log(persona1)
console.log("metodo to string", persona1.toString())

const Empleado1 = new Empleado(persona1.nombre, persona1.apellido, persona1.edad, 1000)
console.log(Empleado1)

console.log(Persona.contadorPersona)

console.log(Empleado1.toString())

const cliente = new Cliente("angela", "montealegre", 62)
console.log(cliente)
cliente.fechaRegistro = new Date()
console.log(cliente.toString())
