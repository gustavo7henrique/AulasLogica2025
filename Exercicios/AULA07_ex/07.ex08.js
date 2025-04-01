const prompt = require( "prompt-sync" ) ();

var venda  = Number(prompt('Quanto você vendeu no mês? '));

if (venda > 5000 ) {
    console.log(`Comissão no valor de:${(5/100)*5000} reais`);
} else {
    console.log(`Comissão no valor de: ${(3/100)*5000} reais`);
}