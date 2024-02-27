function filtrarProductos(objetoProductos, precioMaximo) {
    if (!objetoProductos.hasOwnProperty('productos') || !Array.isArray(objetoProductos.productos)) {
        throw new Error('El objeto debe contener una propiedad "productos" que sea un arreglo.');
    }

    return objetoProductos.productos.filter(producto => producto.precio <= precioMaximo);
}

const objetoProductos = {
    productos: [
        { nombre: "Naranjas", precio: 10 },
        { nombre: "Peras", precio: 20 },
        { nombre: "Manzanas", precio: 30 },
        { nombre: "Duraznos", precio: 40 }
    ]
};

const precioMaximo = 25;
const productosFiltrados = filtrarProductos(objetoProductos, precioMaximo);
console.log(productosFiltrados);
