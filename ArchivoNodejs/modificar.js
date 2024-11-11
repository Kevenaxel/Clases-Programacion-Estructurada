const fs = require('fs')
const fileName ='estudiantes.json'

fs.readFile(fileName,'utf8', (err,data)=>{
    if(err){
        console.error('Error al leer  el archivo JSON:',err);
        return;
    }
    try{
        const estudiantes = JSON.parse(data);
        estudiantes[0].edad = '69'

        fs.writeFile(fileName,JSON.stringify(estudiantes,null,2),(error)=>{
            if(err){
                console.error('Error al modificar el archivo JSON:',err)
                return;
            }
            console.log('Nueva modificacion exitosa')
        })
    }catch(err){
        console.log('Modificacion Exitosa')
    }
})