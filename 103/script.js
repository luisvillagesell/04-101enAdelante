// Definición de la función buscarLibro
function buscarLibro(biblioteca, titulo) {
    return biblioteca.libros.find(libro => libro.titulo === titulo);
}

// Ejemplo de una biblioteca de libros
const biblioteca = {
    libros: [
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "Un Mundo Feliz", autor: "Aldous Huxley" },
        { titulo: "Fahrenheit 451", autor: "Ray Bradbury" }
    ]
};

// Ejemplo de uso de la función buscarLibro
const libroBuscado = buscarLibro(biblioteca, "1984");
console.log(libroBuscado); // Debería imprimir el objeto del libro "1984"

