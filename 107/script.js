function filtrarCiudades(objetoCiudades, pais) {
    return objetoCiudades.ciudades.filter(ciudad => ciudad.pais === pais);
}

document.getElementById('filtroCiudades').addEventListener('submit', function(event) {
    event.preventDefault();
    const paisSeleccionado = document.getElementById('selectPais').value;
    const ciudadesFiltradas = filtrarCiudades(datosCiudades, paisSeleccionado);
    mostrarResultados(ciudadesFiltradas);
});

function mostrarResultados(ciudades) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
    if (ciudades.length === 0) {
        resultadoDiv.innerText = 'No se encontraron ciudades para el país seleccionado.';
    } else {
        const ul = document.createElement('ul');
        ciudades.forEach(ciudad => {
            const li = document.createElement('li');
            li.textContent = ciudad.nombre;
            ul.appendChild(li);
        });
        resultadoDiv.appendChild(ul);
    }
}

const datosCiudades = {
    ciudades: [
        { nombre: "Nueva York", pais: "Estados Unidos" },
        { nombre: "Londres", pais: "Reino Unido" },
        { nombre: "París", pais: "Francia" },
        { nombre: "Tokio", pais: "Japón" },
        { nombre: "Roma", pais: "Italia" },
        { nombre: "Sídney", pais: "Australia" },
        { nombre: "Ciudad de México", pais: "México" },
        { nombre: "Madrid", pais: "España" },
        { nombre: "Pekín", pais: "China" }
    ]
};
