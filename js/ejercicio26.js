function palabraMasLarga(cadena) {
    let palabras = cadena.split(" ");
    let palabraLarga = "";

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }

    return palabraLarga;
}

console.log(palabraMasLarga("Juan Diego Guzmán Aldana"));