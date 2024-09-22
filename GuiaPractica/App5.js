const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function aplicarDescuentoPorApellido(apellido) {
  const ultimaLetra = apellido.charAt(apellido.length - 1).toUpperCase();
  switch (ultimaLetra) {
    case 'S':
      return { descuento: 0.2, mensaje: "20%" };
    case 'A':
      return { descuento: 0.15, mensaje: "15%" };
    case 'O':
      return { descuento: 0.1, mensaje: "10%" };
    default:
      return { descuento: 0, mensaje: "Ningún descuento" };
  }
}

rl.question('Ingresa tu primer apellido: ', (primerApellido) => {
  rl.question('Ingresa tu segundo apellido: ', (segundoApellido) => {
    const descuentoInfo = aplicarDescuentoPorApellido(segundoApellido);
    const totalAPagar = 100; 
    const descuentoAplicado = totalAPagar * descuentoInfo.descuento;
    const totalConDescuento = totalAPagar - descuentoAplicado;

    console.log(`Descuento aplicado: ${descuentoInfo.mensaje}`);
    console.log(`Total a pagar con descuento: $${totalConDescuento.toFixed(2)}`);
    rl.close();
  });
});
