const readline = require('readline');

// Crear la interfaz para leer datos del terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tarifario de ejemplo
const tarifario = [
    { categoria: 'vehículos menores sin motor', tarifa: '3 soles x hora' },
    { categoria: 'vehículos menores con motor', tarifa: '4.5 soles x hora' },
    { categoria: 'Vehiculos menores 4 ejes', tarifa: '6 soles x hora' },
    { categoria: 'Vehiculos mayores 4,6 ejes', tarifa: '10 soles la hora' }
];

// Función para mostrar el tarifario
function mostrarTarifarioServicios(nombres, apellidos) {
    console.log(`\nEstimado(a) ${nombres} ${apellidos}, aquí está el tarifario de servicios:\n`);
    tarifario.forEach((item, index) => {
        console.log(`${index + 1}. Categoría: ${item.categoria} - Tarifa: ${item.tarifa}`);
    });
    console.log('\n');
}

// Solicitar nombres y apellidos al cliente
rl.question('Por favor, ingrese su nombre: ', (nombres) => {
    rl.question('Por favor, ingrese su apellido: ', (apellidos) => {
        mostrarTarifarioServicios(nombres, apellidos);
        rl.close();
    });
});