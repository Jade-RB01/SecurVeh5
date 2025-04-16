function CalcularTarifa(nombreCliente, apellidosCliente, marcaVehiculo, modeloVehiculo, placaVehiculo, tipoVehiculo, horas) {
    // Definir tarifas por hora según el tipo de vehículo
    const tarifas = {
        "Vehículos menores sin motor": 3.00,
        "Vehículos menores con motor": 4.50,
        "Vehículos menores 4 ejes": 6.00,
        "Vehículos mayores 4,6 ejes": 10.00
    };

    // Validar tipo de vehículo
    if (!tarifas.hasOwnProperty(tipoVehiculo)) {
        return "Error: Tipo de vehículo no válido";
    }

    // Validar horas
    if (horas <= 0 || !Number.isInteger(horas)) {
        return "Error: Las horas deben ser un número entero positivo";
    }

    // Calcular costos
    const tarifaHora = tarifas[tipoVehiculo];
    const subtotal = tarifaHora * horas;
    const igv = subtotal * 0.18; // IGV del 18%
    const total = subtotal + igv;

    // Formatear el resultado
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
    return resultado;
}

module.exports = { CalcularTarifa };