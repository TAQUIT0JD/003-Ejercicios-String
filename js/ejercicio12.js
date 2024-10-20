let c;
let cadena = "oso";
function palindromo(cadena){
    c=cadena.split('').reverse().join('');
    if (cadena==c) {
        console.log('La palabra'+cadena+' es un palíndromo.');
    } else {
        console.log('La palabra '+cadena+' no es un palíndromo.');
    }
}
palindromo(cadena);