//04
const prompt = require( "prompt-sync" ) ();

var n = Number(prompt('qual numero você quer? '));
if (n >= 0) {
    console.log("NUMERO É POSITIVO");
} else {
    console.log("NUMERO É NEGATIVO");
}