const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarMenu() {
    console.log(`
    1. Crear archivo JSON con estudiantes
    2. Leer archivo JSON de estudiantes
    3. Agregar nuevo estudiante
    4. Actualizar información de estudiantes
    5. Eliminar un estudiante
    6. Contar estudiantes
    7. Salir`);
    rl.question('Seleccione una opción: ', manejarOpcion);
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            ejecutarScript('create.js');
            break;
        case '2':
            ejecutarScript('read.js');
            break;
        case '3':
            ejecutarScript('add.js');
            break;
        case '4':
            ejecutarScript('update.js');
            break;
        case '5':
            ejecutarScript('delete.js');
            break;
        case '6':
            ejecutarScript('count.js');
            break;
        case '7':
            console.log('Sesion Finalizada!');
            rl.close();
            return;
        default:
            console.log('Opción no válida. Inténtelo de nuevo.');
            mostrarMenu();
            return;
    }
}

function ejecutarScript(script) {
    exec(`node ${script}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar ${script}: ${error.message}`);
        } else if (stderr) {
            console.error(`Error en ${script}: ${stderr}`);
        } else {
            console.log(`Salida de ${script}:\n${stdout}`);
        }
        mostrarMenu();
    });
}

mostrarMenu();