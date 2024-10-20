let cadena = "Hola en JavaScript";

function truncarCadena(cantidad, numeroletras) {
    if (cantidad.length > numeroletras) {
        return cantidad.slice(0, numeroletras) + "...";
    } else {
        return cantidad;
    }
}

let textoTruncado = truncarCadena(cadena, 10);

console.log(textoTruncado);