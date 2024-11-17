const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarMenu() {
    console.log(`1. Crear un archivo JSON con estudiantes, 2. Leer el archivo JSON de los estudiantes, 3. Agregar un nuevo estudiante, 4. Actualizar información de estudiantes, 5. Eliminar un estudiante, 6. Contar estudiantes, 7. Salir`);
    rl.question('Seleccione una opción: ', Opcion);
}

function Opcion(opcion) {
    switch (opcion) {
        case '1':
            ejecutar('create.js');
            break;
        case '2':
            ejecutar('read.js');
            break;
        case '3':
            ejecutar('add.js');
            break;
        case '4':
            ejecutar('update.js');
            break;
        case '5':
            ejecutar('delete.js');
            break;
        case '6':
            ejecutar('count.js');
            break;
        case '7':
            console.log('Finalizar el proceso');
            rl.close();
            return;
        default:
            console.log('La opcion no es valida. Intente de nuevo porfavor.');
            mostrarMenu();
            return;
    }
}

function ejecutar(script) {
    exec(`node ${script}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar el programa.${script}: ${error.message}`);
        } else if (stderr) {
            console.error(`Error en la ${script}: ${stderr}`);
        } else {
            console.log(`Salida de ${script}:\n${stdout}`);
        }
        mostrarMenu();
    });
}

mostrarMenu();