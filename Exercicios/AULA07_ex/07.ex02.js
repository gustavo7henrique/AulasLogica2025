//02
const prompt = require( "prompt-sync" ) ();

var n1= Number(prompt('Qual o 1º numero? '));
var n2 = Number(prompt('Qual o 2º numero? '));

if (n1 > n2) {
    console.log(`${n1} é maior que ${n2}`);
} else {
    console.log(`${n1} é menor que ${n2}`);
}