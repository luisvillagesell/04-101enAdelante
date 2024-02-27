function contarVocales() {
    const texto = document.getElementById('texto').value.toLowerCase();
    let contadorVocales = 0;

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if ('aeiouáéíóú'.indexOf(caracter) !== -1) {
            contadorVocales++;
        }
    }

    document.getElementById('resultado').innerText = "Número de vocales: " + contadorVocales;
}
