function cadenasnakecase(cadena) {
    return cadena
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/[^\w_]/g, '');
}

console.log(cadenasnakecase("Juan Diego Guzmán Aldana"));