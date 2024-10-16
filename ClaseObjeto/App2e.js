class Libro{
    constructor(Titulo, Autor){
        this._Titulo = Titulo;
        this._Autor = Autor;
    }
    mostrarInfo(){
        console.log(`Titulo: ${this._Autor}, Autor: ${this._Autor}`);

    }
    
}
let libro1 = new Libro('Cien anos de soledad', 'San Gabriel el miercoles');
libro1.mostrarInfo();