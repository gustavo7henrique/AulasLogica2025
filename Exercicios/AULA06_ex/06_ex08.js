//08
const prompt = require( "prompt-sync" ) ();

var altura = Number(prompt('Qual a altura da parede em metros? '));
var largura = Number(prompt('Qual a largura da parede em metros? '));
var area = altura * largura 
var tinta = area / 2
console.log(`A area da parede é de ${area} m^2 e você precisará de ${tinta} litros de tinta para pintar toda parede`);