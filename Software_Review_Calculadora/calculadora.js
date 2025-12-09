function convertirAFahrenheit() {
    let gradosCentigrados = parseFloat(document.getElementById("inputCentigrados").value);

    if (isNaN(gradosCentigrados)) {
        alert("Por favor ingresa un número válido en grados centígrados.");
        return;
    }

    let resultadoFahrenheit = (gradosCentigrados * 9/5) + 32;
    document.getElementById("inputFahrenheit").value = resultadoFahrenheit.toFixed(2);
}

function convertirACelsius() {
    let gradosFahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);

    if (isNaN(gradosFahrenheit)) {
        alert("Por favor ingresa un número válido en grados Fahrenheit.");
        return;
    }

    let resultadoCentigrados = (gradosFahrenheit - 32) * 5/9;
    document.getElementById("inputCentigrados").value = resultadoCentigrados.toFixed(2); // redondea los deciumales
}