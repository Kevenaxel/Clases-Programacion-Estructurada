//Crear un afuncion que permita aplicar un descuento del 10% si el apellido del cliente comienza con la letra S
//15% si el apellido comienza con la letra M
//20$ si el apellido comienza con la letra L 
//No aplicar descuento si no comienza con las letras mencionadas

const readline = require('readline')

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function calcularDescuento (){
    rl.question('Ingrese su apellido:', (apellido)=>{
        rl.question('Ingrese el monto de su compra:',(compra)=>{
            const letraInicial = apellido.trim().charAt(0).toUpperCase()
            let descuento;
            let precioF;

            switch (letraInicial) {
                case 'S':
                    descuento = 0.10;
                    break;
                case 'M':
                    descuento = 0.15;
                    break;
                case 'L':
                    descuento = 0.20;
                    break;
                default:
                    descuento = 0;
                    break;
            }
            precioF = compra - (compra*descuento)

            if (descuento> 0){
                console.log(`Felicidades tienes un descuento del ${descuento*100}%, su total a pagar es de $${precioF}`)
            }
        })
    })
}