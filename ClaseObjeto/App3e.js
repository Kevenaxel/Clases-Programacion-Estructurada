class Empleado{
    constructor(Nombre, Salario){
        this._Nombre = Nombre;
        this._Salario = Salario;
    }
    mostrarInfo(){
        console.log(`Nombre: ${this._Nombre}, Salario: ${this._Salario}`);
    }
}
let nombre1 = new nombre('KevinFlores', 'AxelFlores')
nombre1.mostrarInfo()