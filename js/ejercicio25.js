function quitacaracteres(cadena) {
    return cadena.replace(/[^\w\s]/gi, '');
}

console.log(quitacaracteres("Hola mundo @#"));