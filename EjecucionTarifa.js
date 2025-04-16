const readline = require('readline');
const { MostrarTarifarioServicios } = require('./MostrarTarifa');
const { CalcularTarifa } = require('./CalcularTarifa');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tiposVehiculos = [
  "Vehículos menores sin motor",
  "Vehículos menores con motor",
  "Vehículos menores 4 ejes",
  "Vehículos mayores 4,6 ejes"
];

function ejecutarFlujo() {
  console.log('=== Sistema SecurVeh ===');
  rl.question('Nombre del cliente: ', (nombres) => {
    rl.question('Apellidos del cliente: ', (apellidos) => {
      console.log(MostrarTarifarioServicios(nombres, apellidos));
      console.log('=== Datos del vehículo ===');
      rl.question('Marca del vehículo: ', (marca) => {
        rl.question('Placa del vehículo: ', (placa) => {
          console.log('\nTipos de vehículos:');
          tiposVehiculos.forEach((tipo, i) => console.log(`${i + 1}. ${tipo}`));
          rl.question('Tipo de vehículo (1-4): ', (opcion) => {
            const tipoIndex = parseInt(opcion) - 1;
            if (tipoIndex < 0 || tipoIndex >= tiposVehiculos.length) {
              console.log('Error: Tipo de vehículo no válido');
              rl.close();
              return;
            }
            rl.question('Horas de guardianía: ', (horas) => {
              const horasNum = parseInt(horas);
              if (isNaN(horasNum) || horasNum <= 0) {
                console.log('Error: Horas inválidas');
                rl.close();
                return;
              }
              console.log(CalcularTarifa(nombres, apellidos, marca, '', placa, tiposVehiculos[tipoIndex], horasNum));
              console.log('=== Fin ===');
              rl.close();
            });
          });
        });
      });
    });
  });
}

ejecutarFlujo();