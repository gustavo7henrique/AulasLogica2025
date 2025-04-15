function formatarData (dia, mes, ano) {
    var dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
}

var data = formatarData(22, 6, 2009);
console.log(data);
console.log(formatarData(22, 6, 2025));

