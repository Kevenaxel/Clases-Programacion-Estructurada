class Producto{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    //Metodo para mostrar informacion del producto
    mostrarInfo(){
        console.log(`Producto: ${this._nombre}, Precio: ${this._precio}`);
    }

    // Metodo get
    get nombre(){
        return this._nombre
    }

    get precio(){
        return this._precio
    }

    //Metodo Set
    set nombre(nuevoNombre){
        return this._nombre = nuevoNombre
    }

    set precio(nuevoPrecio){
        return this._precio = nuevoPrecio
    }
}

// Creamos los objetos de la clase producto
let producto1 = new Producto('Lapto',1200);
let producto2 = new Producto('Telefono', 250);
console.log(producto1._nombre)
console.log(producto2.precio)
producto1.mostrarInfo();


// Utilizando el metodo get
console.log(producto1)
console.log(producto2)



//Metodo set
producto1.nombre='Calculadora'
console.log(producto1.nombre)

producto1.precio = 12
console.log(producto1.precio)
