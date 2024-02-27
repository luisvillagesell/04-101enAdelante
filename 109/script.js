function encontrarMayorEdad(personas) {
    let mayorEdad = personas[0];
    personas.forEach(persona => {
        if (persona.edad > mayorEdad.edad) {
            mayorEdad = persona;
        }
    });
    return mayorEdad;
}

document.getElementById('encontrarMayorEdadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);

    const persona = { nombre: nombre, edad: edad };
    personas.push(persona);

    mostrarResultado();
    document.getElementById('encontrarMayorEdadForm').reset();
});

function mostrarResultado() {
    const personaMayorEdad = encontrarMayorEdad(personas);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    resultadoDiv.textContent = `La persona de mayor edad es: ${personaMayorEdad.nombre} con ${personaMayorEdad.edad} años.`;
}

const personas = [];
