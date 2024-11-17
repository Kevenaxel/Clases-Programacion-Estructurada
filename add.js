const fs = require('fs')
const fileName ='estudiantes.json'

fs.readFile(fileName, 'utf8',(err,data)=>{
    if(err){
        console.error('Error al modificar el archivo JSON',err);
        return;
    }
    //Convertir cadena de JSON
    const estudiantes = JSON.parse(data);
    const nuevoEstudiante={nombre: 'Juana', edad:20, carrera: 'Ingenieria Industrial'}
    estudiantes.push(nuevoEstudiante);

    fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(err)=>{
        if(err){
            console.error('Error al modificar el archivo JSON:',err);
            return;
        }
        console.log('Nuevo estudiante agregado al archivo JSON:');
    });
});