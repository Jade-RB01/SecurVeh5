// Importa readline para leer entradas de la consola
const readline = require('readline');
// Importa las funciones de los módulos
const { MostrarTarifarioServicios } = require('./MostrarTarifa');
const { CalcularTarifa } = require('./CalcularTarifa');

// Crea la interfaz de readline para interactuar con la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tipos de vehículos válidos
const tiposVehiculos = [
  "Vehículos menores sin motor",
  "Vehículos menores con motor",
  "Vehículos menores 4 ejes",
  "Vehículos mayores 4,6 ejes"
];

// Validación para solo letras, espacios y tildes (para nombres y marcas)
const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

// Función para validar y preguntar una entrada con reintentos
// prompt: mensaje a mostrar, 
// validator: función que valida la entrada, 
// callback: qué hacer con el valor válido
function preguntarConReintento(prompt, validator, callback) {
  rl.question(prompt, (valor) => {
    if (validator(valor)) {
      callback(valor); // Si es válido, pasa al siguiente paso
    } else {
      console.log(`Entrada inválida. ${prompt}`); // Si no, pide de nuevo
      preguntarConReintento(prompt, validator, callback);
    }
  });
}

// Función principal que ejecuta el flujo del programa
function ejecutarFlujo() {
    //se imprime en la pantalla
  console.log('=== Sistema SecurVeh ===');

  // Pregunta el nombre, validando que solo contenga letras
  preguntarConReintento('Nombre del cliente: ', (valor) => soloLetras.test(valor), (nombres) => {
    // Pregunta los apellidos, validando que solo contenga letras
    preguntarConReintento('Apellidos del cliente: ', (valor) => soloLetras.test(valor), (apellidos) => {
      // Muestra el tarifario con los datos del cliente importados desde Mostrar Tarifa
      console.log(MostrarTarifarioServicios(nombres, apellidos));
      console.log('=== Datos del vehículo ===');

      // Pregunta la marca, validando que solo contenga letras
      preguntarConReintento('Marca del vehículo: ', (valor) => soloLetras.test(valor), (marca) => {
        // Pregunta la placa 
        preguntarConReintento('Placa del vehículo: ', (valor) => valor.trim() !== '', (placa) => {
          // Muestra los tipos de vehículos
          console.log('\nTipos de vehículos:');
          tiposVehiculos.forEach((tipo, i) => console.log(`${i + 1}. ${tipo}`));
          // Pregunta el tipo de vehículo, validando que sea un número entre 1 y 4
          preguntarConReintento('Tipo de vehículo (1-4): ', (valor) => {
            const num = parseInt(valor);
            // '!isNaN' es usado para comprobar si el valor no es un número y no está entre 1 y 4 retorna un false volviendo a preguntar
            return !isNaN(num) && num >= 1 && num <= 4;
          }, (opcion) => {
            const tipoIndex = parseInt(opcion) - 1;
            // Pregunta las horas, validando que sea un número entero positivo
            preguntarConReintento('Horas de guardianía: ', (valor) => {
              const num = parseInt(valor);
              // '!isNaN' es usado para comprobar si el valor no es un número retorna un false volviendo a preguntar
              return !isNaN(num) && num > 0 && Number.isInteger(num);
            }, (horas) => {
              // Calcula y muestra la tarifa, pasando '' como modelo
              console.log(CalcularTarifa(nombres, apellidos, marca, '', placa, tiposVehiculos[tipoIndex], parseInt(horas)));
              console.log('=== Fin ===');
              rl.close(); // Cierra la interfaz al finalizar
            });
          });
        });
      });
    });
  });
}

// Inicia el programa
ejecutarFlujo();