class Libro{
    constructor(Titulo, Autor){
        this._Titulo = Titulo;
        this._Autor = Autor;
    }
    mostrarInfo(){
        console.log(`Titulo: ${this._Autor}, Autor: ${this._Autor}`);

    }

    get Titulo(){
        return this._Titulo;
    }

    get Autor(){
        return this._Autor
    }
    //Metodo set
    set Titulo(nuevoNombre){
        return this._Titulo = nuevoNombre
    }

    set Autor(nuevoAutor){
        return this._Autor = nuevoAutor
    }
    
}

let libro1 = new Libro('Cien anos de soledad', 'San Gabriel el miercoles');
console.log(libro1.nombre)
libro1.mostrarInfo();

//Metodo set
libro1.Titulo='camaney'
console.log(libro1.Titulo)

libro1.Autor='Amor de dia'
console.log(libro1.Autor)