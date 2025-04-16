const tarifario = [
    { categoria: 'vehículos menores sin motor', tarifa: '3 soles x hora' },
    { categoria: 'vehículos menores con motor', tarifa: '4.5 soles x hora' },
    { categoria: 'Vehiculos menores 4 ejes', tarifa: '6 soles x hora' },
    { categoria: 'Vehiculos mayores 4,6 ejes', tarifa: '10 soles la hora' }
  ];
  
  function MostrarTarifarioServicios(nombres, apellidos) {
    let output = `\nEstimado(a) ${nombres} ${apellidos}, aquí está el tarifario de servicios:\n`;
    tarifario.forEach((item, index) => {
      output += `${index + 1}. Categoría: ${item.categoria} - Tarifa: ${item.tarifa}\n`;
    });
    return output;
  }
  
  module.exports = { MostrarTarifarioServicios };