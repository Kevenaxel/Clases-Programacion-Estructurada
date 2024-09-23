//Crear un afuncion que permita aplicar un descuento del 10% si el apellido del cliente termina con la letra Z
//15% si el apellido termina con la letra N
//20$ si el apellido termina con la letra A
//No aplicar descuento si no comienza con las letras mencionadas


const readline = require('readline')

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function calcularDescuento (){
    rl.question('Ingrese su apellido:',(apellido)=>{
        rl.question('Ingrese el monto de su compra: $',(compra)=>{
            const apellidoMayuscula = apellido.trim().toLocaleUpperCase();
            let descuento;
            let precioF;

            if(apellidoMayuscula.endsWith('Z')){
                descuento= 0.10;
            }else if(apellidoMayuscula.endsWith('N')){
                descuento= 0.15;
            }else if(apellidoMayuscula.endsWith('A')){
                descuento= 0.20; 
            }else{
                descuento=0;
            }
            precioF= compra - (compra*descuento)

            if(descuento> 0){
                console.log(`Felicidades tienes un descuento del ${descuento*100}%, su total a pagar es de $${precioF.toFixed(2)}`)
            }else{
                console.log(`No aplica para descuento, su total a pagar es de ${precioF.toFixed(2)}`)
            }
            rl.close()
        })
    })
}
calcularDescuento()