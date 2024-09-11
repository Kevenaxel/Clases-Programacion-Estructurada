const readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question('Ingresa el precio del producto:',(precio)=>{
    precio = parseFloat(precio)
    let descuento;

    if(precio > 100){
        descuento =0.10
    }else {
        descuento =0.05
    }
    let precioFinal = precio-(precio*descuento)
    console.log(`El precio final del producto es:$${precioFinal.toFixed(2)}`)
    rl.close()
})
