//Descuentos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calcularDescuento(compra) {
    if (compra > 100) {
      return { descuento: 0.1, mensaje: "10%" };
    } else if (compra >= 50 && compra <= 100) {
      return { descuento: 0.05, mensaje: "5%" };
    } else {
      return { descuento: 0, mensaje: "Ningún descuento" };
    }
  }
  
  rl.question('Ingresa el monto de la compra: ', (input) => {
    const montoCompra = parseFloat(input);
    const { descuento, mensaje } = calcularDescuento(montoCompra);
    const totalPagar = montoCompra * (1 - descuento);
    console.log(`Descuento aplicado: ${mensaje}`);
    console.log(`Total a pagar: $${totalPagar.toFixed(2)}`);
    rl.close();
  });
  