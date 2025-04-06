// Ejercicios adicionales
/*
    Fácil
    1. Modificar la función de agregarLibro para evitar agregar duplicados.
    2. Crear una función para buscar un libro por nombre. En caso de que exista, regresar true, caso contario regresar false.
    3. Crear una función que regrese todos los libros que empiecen con una letra en específico. Hint: startsWith()

    Medio
    4. Crear una función para eliminar un libro a partir del nombre.
    5. Crear una función que regrese todos los libros en orden alfabético.
    6. Crear una función que muestre todos los libros en mayúsculas. Hint: toUpperCase()

    Difícil
    7. Crear una función que muestre el nombre al revés de un libro en una posición N
        0       1                 2                         3                   4
        ["1984", "Un mundo feliz", "El fin de la eternidad", "Hábitos atómicos", "Inmune"]
        invertirNombre(3) -> "socimóta sotibáH"

        Hint: String.length ¿Cómo puedo usar un ciclo y la longitud de una cadena para invertirla?
*/


// Ejercicio 1
// Crear un arreglo de libros con al menos 5 libros. Cada libro es una cadena de texto.
const libros = ["1984", "Un mundo feliz", "El fin de la eternidad", "Hábitos atómicos", "Inmune"];

// Crear una función que reciba un arreglo de libros y un libro. La función debe agregar el libro al arreglo de libros.
function agregarLibro(libros, libro) {
    libros.push(libro);
}

// Llamar a la función agregarLibro y pasarle el arreglo de libros y un libro.
agregarLibro(libros, "El juego del ángel");
console.log(libros);

// Ejercicio 2
// Crear una función que reciba un arreglo de libros y un libro. La función debe eliminar el libro del arreglo de libros.
function eliminarLibro(libros, libro) {
    const index = libros.indexOf(libro);
    if (index !== -1) {
        libros.splice(index, 1);
    }
}

// Llamar a la función eliminarLibro y pasarle el arreglo de libros y un libro.
eliminarLibro(libros, "1984");
console.log(libros);

// Ejercicio 3
// Crear una función que reciba un arreglo de libros y un libro. La función debe buscar el libro en el arreglo de libros.
// Si el libro existe, regresar true. Si no existe, regresar false.
function buscarLibro(libros, libro) {
    return libros.includes(libro);
}

// Llamar a la función buscarLibro y pasarle el arreglo de libros y un libro.
console.log(buscarLibro(libros, "1984")); // false
console.log(buscarLibro(libros, "Un mundo feliz")); // true

// Ejercicio 4
// Crear una función que reciba un arreglo de libros y una letra. La función debe regresar todos los libros que empiecen con la letra.
function buscarLibrosPorLetra(libros, letra) {
    return libros.filter(libro => libro.startsWith(letra));
}

// Llamar a la función buscarLibrosPorLetra y pasarle el arreglo de libros y una letra.
console.log(buscarLibrosPorLetra(libros, "H")); // ["Hábitos atómicos"]
console.log(buscarLibrosPorLetra(libros, "E")); // ["El fin de la eternidad", "El juego del ángel"]

// Ejercicio 5
// Crear una función que reciba un arreglo de libros y regrese todos los libros en orden alfabético.
function ordenarLibros(libros) {
    return libros.sort();
}

// Llamar a la función ordenarLibros y pasarle el arreglo de libros.
console.log(ordenarLibros(libros)); // ["El fin de la eternidad", "El juego del ángel", "Hábitos atómicos", "Inmune", "Un mundo feliz"]

// Ejercicio 6
// Crear una función que reciba un arreglo de libros y regrese todos los libros en mayúsculas.
function librosMayusculas(libros) {
    return libros.map(libro => libro.toUpperCase());
}

// Llamar a la función librosMayusculas y pasarle el arreglo de libros.
console.log(librosMayusculas(libros)); 
// ["EL FIN DE LA ETERNIDAD", "EL JUEGO DEL ÁNGEL", "HÁBITOS ATÓMICOS", "INMUNE", "UN MUNDO FELIZ"]

// Ejercicio 7
// Crear una función que reciba un arreglo de libros y una posición N. 
// La función debe regresar el nombre del libro en la posición N al revés.
function invertirNombre(libros, posicion) {
    if (posicion >= 0 && posicion < libros.length) {
        return libros[posicion].split("").reverse().join("");
    }
    return null; // En caso de que la posición no sea válida
}

// Llamar a la función invertirNombre y pasarle el arreglo de libros y una posición.
console.log(invertirNombre(libros, 3)); // "socimóta sotibáH"
console.log(invertirNombre(libros, 0)); // "48"
console.log(invertirNombre(libros, 5)); // null (posición no válida)
console.log(invertirNombre(libros, -1)); // null (posición no válida)
console.log(invertirNombre(libros, 2)); // "dadinorete la nif lE"
console.log(invertirNombre(libros, 4)); // "enumi" (posición válida)
console.log(invertirNombre(libros, 1)); // "zilef od odnum nU" (posición válida)
console.log(invertirNombre(libros, 3)); // "socimóta sotibáH" (posición válida)
console.log(invertirNombre(libros, 0)); // "48" (posición válida)
console.log(invertirNombre(libros, 2)); // "dadinorete la nif lE" (posición válida)
console.log(invertirNombre(libros, 4)); // "enumi" (posición válida)
console.log(invertirNombre(libros, 1)); // "zilef od odnum nU" (posición válida)