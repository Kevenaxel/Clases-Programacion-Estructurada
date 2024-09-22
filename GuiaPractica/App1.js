// Guia Practica Clasificacion de edad.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function clasificarEdad(edad) {
  if (edad < 13) {
    return "Menor de edad";
  } else if (edad < 18) {
    return "Adolescente";
  } else if (edad < 65) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
}

rl.question('Ingresa tu edad: ', (input) => {
  const edadUsuario = parseInt(input);
  const categoria = clasificarEdad(edadUsuario);
  console.log(`Según la edad ingresada (${edadUsuario} años), eres: ${categoria}.`);
  rl.close();
});
