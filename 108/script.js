function calcularEdadPromedio(personas) {
    const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdades / personas.length;
}

document.getElementById('calcularEdadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);

    const persona = { nombre: nombre, edad: edad };
    personas.push(persona);

    mostrarResultado();
    document.getElementById('calcularEdadForm').reset();
});

function mostrarResultado() {
    const promedio = calcularEdadPromedio(personas);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.textContent = `El promedio de edades es: ${promedio.toFixed(2)}`;
}

const personas = [];
