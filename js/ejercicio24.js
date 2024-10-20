function contieneNumeros(cadena) {
    return /\d/.test(cadena);
}

console.log(contieneNumeros("Hola123"));
