class Empleado{
    constructor(Nombre, Salario){
        this._Nombre = Nombre;
        this._Salario = Salario;
    }
    mostrarInfo(){
        console.log(`Nombre: ${this._Nombre}, Salario: ${this._Salario}`);
    }

    get Nombre(){
        return this._Nombre;
    }

    get salario(){
        return this._Salario;
    }

    get 
}
let nombre1 = new nombre('KevinFlores', 'AxelFlores')
console.log(nombre1._Nombre)

nombre1.mostrarInfo()