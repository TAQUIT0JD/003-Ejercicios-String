let cadena = "Hola mundo en javascript";

let cadenacamel = cadena
    .toLowerCase()
    .split(" ")
    .map((palabras, i) => {
        if (i === 0) {
            return palabras;
        }
        return palabras.charAt(0).toUpperCase() + palabras.slice(1);
    })
    .join("");

console.log(cadenacamel);