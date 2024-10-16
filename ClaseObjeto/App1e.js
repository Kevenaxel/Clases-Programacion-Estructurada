class Producto{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    //Metodo para mostrar informacion del producto
    mostrarInfo(){
        console.log(`Producto: ${this._nombre}, Precio: ${this._precio}`);
    }
}

// Creamos los objetos de la clase producto
let producto1 = new Producto('Lapto',1200);
let producto2 = new Producto('Telefono', 250);

console.log(producto1)
console.log(producto2)

producto1.mostrarInfo();