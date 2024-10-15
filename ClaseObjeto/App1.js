class Jugadores{
    constructor(nombre, colorGorra){
        this._nombre = nombre;
        this._colorGorra = colorGorra;
    }
    //Metodos
    saltar(){}
    correr(){}
    saludar(){
      return `Hola soy ${this._nombre} y mi gorra es  ${this._colorGorra}`;
    }
}

let jugador1 = new Jugadores('Mario', 'Rojo')
let jugador2 = new Jugadores('Lugui', 'Verde')

console.log(jugador1)
console.log(jugador2)

console.log(jugador1.saludar());
console.log(jugador2.saludar());