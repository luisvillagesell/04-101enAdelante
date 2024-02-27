function calcularTotalCompra(carrito, productos) {
    let total = 0;
    for (const [producto, cantidad] of Object.entries(carrito)) {
        if (productos.hasOwnProperty(producto)) {
            total += productos[producto] * cantidad;
        }
    }
    return total;
}

// Ejemplo de uso de la función calcularTotalCompra
const carrito = {
    "producto1": 2,
    "producto2": 1,
    "producto3": 3
};

const productos = {
    "producto1": 10,
    "producto2": 20,
    "producto3": 30
};

const totalCompra = calcularTotalCompra(carrito, productos);
console.log("Total de la compra:", totalCompra);
