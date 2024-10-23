//Crea una clase rectangulo con atributos ancho y alto
//Define un metodo get llamado area que devuelva el area del rectangulo
//y un metodo set que permita modificar el valor del ancho
//Formula para obtener el area ancho * alto

class Rectangulo{
    constructor(ancho, altura){
        this._ancho = ancho
        this._altura = altura
    }
    //Metodo Get
    get area(){
        return this._ancho* this._altura;
    }
    //Metodo set
    set ancho(nuevoAncho){
        this._ancho = nuevoAncho
    }

    mostrarInfo(){
        console.log(`El area del rectangulo es: ${this.area}`)
    }

    
}

let rect = new Rectangulo (10,5)
console.log(rect.area)

rect.ancho = 2
console.log(rect.area)

rect.mostrarInfo()