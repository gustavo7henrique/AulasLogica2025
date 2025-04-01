//06
const prompt = require( "prompt-sync" ) ();

var n1= parseInt(prompt('Qual o 1º numero? '));
var n2 = parseInt(prompt('Qual o 2º numero? '));

if (n1 != n2) {
    console.log(`${n1} é diferente de ${n2}`  );
} else {
    console.log(`${n1} é igual ${n2}`);
}