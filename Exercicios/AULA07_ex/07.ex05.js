//05
const prompt = require( "prompt-sync" ) ();

var ano = Number(prompt('Qual o seu ano de nascimento? '));
var idade = 2025 - ano 
if (idade < 18) {
    console.log("MENOR DE IDADE");
} else {
    console.log("MAIOR DE IDADE");
}

