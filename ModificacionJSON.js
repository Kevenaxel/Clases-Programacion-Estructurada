const fs=require('fs');

const fileName = 'Estudiantes.json'

fs.readFile(fileName,'utf8',(err,data)=>{
    if(err){
        console.error('Error al leer el archivo de JSON'),err;
        return;
    }
    try{
        const objectJSON = JSON.parse(data);

        objectJSON.Ciudad = 'La Union'
        objectJSON.Edad=21

        const nuevoContenido =JSON.stringify(objectJSON,null,2)

        fs.writeFile(fileName,nuevoContenido,(error)=>{
            if(error){
                console.error('Error al escribir el archivo correspondiente JSON',error)
                return;
            }
            console.log('Archivo JSON Ha sido modificado y ha sido guardado con exito')
        })

    }catch(error){
        console.error('Error al parsear el archivo JSON',error)
    }

})