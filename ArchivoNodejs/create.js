const fs = require('fs')
const fileName ='estudiantes.json'
const estudiantes = [
    {nombre: 'Juan', edad:18,carrera:'Ingenieria en DS'},
    {nombre: 'Ana', edad:19,carrera:'Ingenieria en DS'},
    {nombre: 'Karla', edad:22,carrera:'Ingenieria en civil'},
]

fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(err)=>{
    if(err){
        console.error('Error al crear el archivo JSON',err)
        return;
    }
    console.log('El archivo JSON fue creada con exito')
})
