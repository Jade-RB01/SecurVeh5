// Función que calcula la tarifa de guardianía para un vehículo
// Parámetros: datos del cliente, marca, placa, tipo de vehículo y las horas
function CalcularTarifa(nombreCliente, apellidosCliente, marcaVehiculo, modeloVehiculo, placaVehiculo, tipoVehiculo, horas) {
    // Define las tarifas por hora para cada tipo de vehículo
    const tarifas = {
        "Vehículos menores sin motor": 3.00,
        "Vehículos menores con motor": 4.50,
        "Vehículos menores 4 ejes": 6.00,
        "Vehículos mayores 4,6 ejes": 10.00
    };

    // Valida si el tipo de vehículo existe en las tarifas
    if (!tarifas.hasOwnProperty(tipoVehiculo)) {
        return "Error: Tipo de vehículo no válido";
    }

    // Valida si las horas son un número entero positivo
    if (horas <= 0 || !Number.isInteger(horas)) {
        return "Error: Las horas deben ser un número entero positivo";
    }

    // Calcula el costo: tarifa por hora * horas
    const tarifaHora = tarifas[tipoVehiculo];
    const subtotal = tarifaHora * horas;
    const igv = subtotal * 0.18; // IGV del 18%
    const total = subtotal + igv; // Total incluye IGV

    // Formatear el resultado para exportarlo como boleta.
    const resultado = `
Detalle del Servicio de Guardianía - SecurVeh
Cliente: ${nombreCliente} ${apellidosCliente}
Vehículo: ${marcaVehiculo} ${modeloVehiculo}
Placa: ${placaVehiculo}
Tipo de vehículo: ${tipoVehiculo}
Horas de guardianía: ${horas}
Costo por hora: S/ ${tarifaHora.toFixed(2)}
Subtotal: S/ ${subtotal.toFixed(2)}
IGV (18%): S/ ${igv.toFixed(2)}
Total a pagar: S/ ${total.toFixed(2)}
    `;
    // Devuelve la cadena para que main.js la imprima
    return resultado;
}
// Exporta la función como módulo para su uso en EjecucionTarifa.js
module.exports = { CalcularTarifa };