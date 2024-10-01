// Solicitar al usuario que ingrese un numero y multiplicar ese valor por 2 repetidamente
// hasta que el resultado sea mayor que 100

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese un numero:', (numero)=>{
    let resultado = parseInt(numero);

    while(resultado <=100){
        resultado*=2;
        console.log('Resultado actual: ',resultado);
    }
    rl.close();
})