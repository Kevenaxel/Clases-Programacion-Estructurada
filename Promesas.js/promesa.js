let x=10

const promesa = new Promise((resolve, reject)=>{
    if(x==11){
        resolve('La variable es igual a 10')
    }else{
        reject('La variable no es igual a 10')
    }
})

promesa.then(res =>{
    console.log('Mensaje:' + res)
})
.catch(error=>{
    console.log('Error:'+ error)
})
