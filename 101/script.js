document.getElementById('calcularBtn').addEventListener('click', function() {
    const ancho = parseFloat(document.getElementById('ancho').value);
    const alto = parseFloat(document.getElementById('alto').value);

    const rectangulo = {
        ancho: ancho,
        alto: alto
    };

    try {
        const area = calcularAreaRectangulo(rectangulo);
        document.getElementById('resultado').value = area;
    } catch (error) {
        alert(error.message);
    }
});

function calcularAreaRectangulo(rectangulo) {
    if (!rectangulo.hasOwnProperty('ancho') || !rectangulo.hasOwnProperty('alto')) {
        throw new Error('El objeto debe tener propiedades "ancho" y "alto"');
    }

    const area = rectangulo.ancho * rectangulo.alto;
    console.log(area);
    return area;
}




