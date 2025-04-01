// 04
const prompt = require( "prompt-sync" ) ();

var nota1 = Number(prompt('Qual o valor da 1ª nota? '));
var nota2 = Number(prompt('Qual o valor da 2ª nota? '));
var media = (nota1 + nota2)/ 2
console.log(`A média das notas é igua à: ${media}`);
