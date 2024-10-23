class Libro{
    constructor(Titulo, Autor){
        this._Titulo = Titulo;
        this._Autor = Autor;
    }
    mostrarInfo(){
        console.log(`Titulo: ${this._Autor}, Autor: ${this._Autor}`);

    }

    get nombre(){
        return this._titulo;
    }
    
}

let libro1 = new Libro('Cien anos de soledad', 'San Gabriel el miercoles');
console.log(libro1.nombre)
libro1.mostrarInfo();