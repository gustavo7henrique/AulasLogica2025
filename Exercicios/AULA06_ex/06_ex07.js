//07
const prompt = require( "prompt-sync" ) ();

var carteira = Number(prompt('Quantos reais você possui em sua carteira? '));
var dolar = carteira / 5.80;
console.log(`Você pode trocar seus ${carteira} reais, por ${dolar.toFixed(2)} dolares`); 
 //.toFixed(2) deixa somente 2 casas decimais