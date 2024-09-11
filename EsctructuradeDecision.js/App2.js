const readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Ingresa tu nota (0-100):', (calificacion)=>{
    calificacion = parseFloat(calificacion)
    let letra
   
    if(calificacion >=90){
        letra = 'A'
    }else if(calificacion >=80){
        letra = 'B'
    }else if(calificacion >=70){
        letra = 'C'
    }else if(calificacion >=60){
        letra = 'D'
    }else{
        letra = 'F'
    }
    console.log(`Tu calificacion es: ${letra}`)
    rl.close()
})