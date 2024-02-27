function calcularDescuento(precio, descuento) {
    const precioConDescuento = precio * (1 - descuento / 100);
    return precioConDescuento.toFixed(2);
}

document.getElementById('calcularDescuentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const precio = parseFloat(document.getElementById('precio').value);
    const descuento = parseFloat(document.getElementById('descuento').value);
    
    const precioFinal = calcularDescuento(precio, descuento);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = `El precio con descuento es: $${precioFinal}`;
});
