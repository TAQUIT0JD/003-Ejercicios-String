function quitarletrasrepetidas(cadena) {
    return cadena.replace(/(.)\1+/g, '$1');
}

console.log(quitarletrasrepetidas("aabbccdde"));