//creación de arreglo/array para objetos que muestren las propiedades 'categoria' y 'tarifa'
const tarifario = [
    { categoria: 'vehículos menores sin motor', tarifa: '3 soles x hora' },
    { categoria: 'vehículos menores con motor', tarifa: '4.5 soles x hora' },
    { categoria: 'Vehiculos menores 4 ejes', tarifa: '6 soles x hora' },
    { categoria: 'Vehiculos mayores 4,6 ejes', tarifa: '10 soles la hora' }
  ];

  //se crea la funcion recibiendo los parametros nombres y apellidos
  function MostrarTarifarioServicios(nombres, apellidos) {
    //se crea una variable ooutput que almacenara la cadena de texto
    // \n al principio y al final indica un salto de línea, para dar formato.
    let output = `\nEstimado(a) ${nombres} ${apellidos}, aquí está el tarifario de servicios:\n`;
    //se recorre el arreglo tarifario para mostrarse en consola
    tarifario.forEach((item, index) => {
      output += `${index + 1}. Categoría: ${item.categoria} - Tarifa: ${item.tarifa}\n`;
    });
    //Una vez que se terminó de construir el mensaje, se devuelve la variable output con todo el texto formateado.
    return output;
  }
  
  //se exporta la funcion para usarla en otro modulo
  module.exports = { MostrarTarifarioServicios };