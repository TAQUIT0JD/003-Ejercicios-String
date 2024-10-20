function cadenacapitalizada(cadena) {
    return cadena
        .split(" ")
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ");
}

console.log(cadenacapitalizada("juan diego"));