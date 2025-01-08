class Persona{
    static contadorObjetosPersonas = 0
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
        Persona.contadorObjetosPersonas++
    }


    static saludar(){
        console.log("saludos desde metodo static")
    }

    static saludar2(persona){
        console.log(`hola ${persona.nombre}`)
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    nombreCompleto(){
        return `${this._nombre} ${this._apellido}`
    }
    toString(){
        return this.nombreCompleto()
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido)
        this._departamento = departamento
    }

    get departamento(){
        return this._departamento
    }

    set departamento(departamento){
        this._departamento = departamento
    }
    //sobre escritura
    nombreCompleto(){
        return `${super.nombreCompleto()}, ${this._departamento}`
    }

    
    
}


let persona1 = new Persona("cristian", "peña")

console.log(persona1.nombre)
persona1.nombre = "Cristian andres"
console.log(persona1.nombre)

let empleado1 = new Empleado("cristian", "peña", "Desarrollo")
console.log(empleado1.nombreCompleto())

console.log(empleado1.toString()) 

//persona1.saludar() no es posible llamar un método static desde un objeto

Persona.saludar()
Persona.saludar2(persona1)

Empleado.saludar2(empleado1)

console.log(Persona.contadorObjetosPersonas)


let idPersona = 0
console.log(++idPersona)