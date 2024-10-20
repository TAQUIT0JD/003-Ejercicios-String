let cadena = "Hola mundo";
let buscarletra = "a";

let r = cadena.split("").reduce((contador, letra) => {
    if (letra === buscarletra) {
        contador++;
    }
    return contador;
}, 0);

console.log(r);