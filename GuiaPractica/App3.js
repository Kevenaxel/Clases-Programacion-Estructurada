//Salario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calcularSalario(horasTrabajadas, tasaHora) {
    const horasNormales = Math.min(horasTrabajadas, 40);
    const horasExtras = Math.max(horasTrabajadas - 40, 0);
    const salarioNormal = horasNormales * tasaHora;
    const salarioExtras = horasExtras * tasaHora * 1.5;
    return salarioNormal + salarioExtras;
  }
  
  rl.question('Ingresa las horas trabajadas: ', (horasInput) => {
    rl.question('Ingresa la tasa de pago por hora: ', (tasaInput) => {
      const horasTrabajadas = parseFloat(horasInput);
      const tasaHora = parseFloat(tasaInput);
      const salarioTotal = calcularSalario(horasTrabajadas, tasaHora);
      console.log(`Salario total: $${salarioTotal.toFixed(2)}`);
      rl.close();
    });
  });
  