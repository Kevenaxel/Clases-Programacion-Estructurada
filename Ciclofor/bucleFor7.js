const arrayNumeros =[1,2,3,4,5,6,7,8,9,10]
let pares = 0
let impares = 0

for(let i=0; i<arrayNumeros.length; i++){
    if(arrayNumeros[i]%2===0){
        pares++;
    }else{
        impares++;
    }
}
console.log("Numeros pares:", pares)
console.log("Numeros impares:", impares)