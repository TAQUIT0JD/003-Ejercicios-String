function cantidadfrecuenciacaracteres(cadena) {
    return cadena.split("").reduce((frecuencia, caracter) => {
        frecuencia[caracter] = (frecuencia[caracter] || 0) + 1;
        return frecuencia;
    }, {});
}

let texto = "Hola Juan Diego";
let frecuenciaCaracteres = cantidadfrecuenciacaracteres(texto);
console.log(frecuenciaCaracteres);