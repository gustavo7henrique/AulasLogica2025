//10
const prompt = require( "prompt-sync" ) ();

var percorrido = Number(prompt('Quantos quilometros voce percorreu com o carro alugado? '));
var dias = Number(prompt('Quantos dias você ficou com o carro alugado? '));
var preco = (60 * dias) + (0.15 * percorrido);
console.log(`Você terá que pagar: ${preco} reais para a locadora do carro`);
