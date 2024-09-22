const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function aplicarDescuentoPorInicial(nombre) {
    const inicial = nombre.charAt(0).toUpperCase();
    switch (inicial) {
      case 'A':
        return { descuento: 0.2, mensaje: "20%" };
      case 'J':
        return { descuento: 0.15, mensaje: "15%" };
      case 'C':
        return { descuento: 0.1, mensaje: "10%" };
      default:
        return { descuento: 0, mensaje: "Ningún descuento" };
    }
  }
  
  rl.question('Ingresa tu nombre: ', (nombreInput) => {
    const nombre = nombreInput.trim();
    const { descuento, mensaje } = aplicarDescuentoPorInicial(nombre);
    console.log(`Descuento aplicado: ${mensaje}`);
    rl.close();
  });
  