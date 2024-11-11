const fs = require('fs')


const fileName='archivo.txt'
const contenido='Estes es un contenido para mi primer archivo creado desdde node.js'

fs.writeFile(fileName, contenido, (err)=>{
    if (err){
        console.log('Error al crear el archivo',err);
    } else{
        console.log('El archivo fue creado con exito y el contenido fue agregado')
    }
})