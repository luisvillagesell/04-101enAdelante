document.getElementById('calcularBtn').addEventListener('click', function() {
    const notasString = document.getElementById('notas').value;
    const notasArray = notasString.split(',').map(nota => parseFloat(nota.trim()));

    try {
        const promedio = calcularPromedioNotas({ notas: notasArray });
        document.getElementById('resultado').value = promedio.toFixed(2);
        console.log('El promedio de las notas es:', promedio.toFixed(2));
    } catch (error) {
        alert(error.message);
    }
});

function calcularPromedioNotas(objetoNotas) {
    const notas = objetoNotas.notas;

    if (!notas || !Array.isArray(notas) || notas.length === 0) {
        throw new Error('El objeto debe contener una propiedad "notas" que sea un arreglo no vacío.');
    }

    const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = sumaNotas / notas.length;

    if (isNaN(promedio)) {
        throw new Error('El arreglo de notas contiene valores no numéricos.');
    }

    return promedio;
}
