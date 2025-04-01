//Exercício 04
const prompt = require( "prompt-sync" ) ();
///////////////////////////////////////////////////////////////

var inicio = Number(prompt("Digite o incio: "));
var fim = Number(prompt("Digite o fim: "));
var passo = Number(prompt("Digite o passo: "));

for(let z = inicio; z <= fim; z+= passo){
    console.log(`${z}`);
    
}