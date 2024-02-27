function calcularTotalCompra(datosCompra) {
    const carrito = datosCompra.carrito;
    const productos = datosCompra.productos;
    let total = 0;

    for (let producto in carrito) {
        if (productos.hasOwnProperty(producto)) {
            total += productos[producto] * carrito[producto];
        }
    }

    return total;
}

const datosCompra = {
    carrito: {
        "producto1": 2,
        "producto2": 1,
        "producto3": 3
    },
    productos: {
        "producto1": 10,
        "producto2": 20,
        "producto3": 5
    }
};

const totalCompra = calcularTotalCompra(datosCompra);
document.getElementById('total').innerText = "Total de la compra: $" + totalCompra;
