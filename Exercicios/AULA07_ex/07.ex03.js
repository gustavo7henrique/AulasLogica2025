//03
const prompt = require( "prompt-sync" ) ();

var numero1 = parseInt(prompt("Qual número você quer? "));
if (numero1 % 2 == 0) {
    console.log(`NÚMERO PAR`);
} else {
    console.log(`NÚMERO ÍMPAR`);
}
