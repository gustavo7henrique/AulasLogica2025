// 02
const prompt = require( "prompt-sync" ) ();

var nmero = parseInt(prompt('Qual o número?'));
var nmero1 = nmero - 1;
var nmero2 = nmero + 1;
console.log(`O antecessor de ${nmero}, é ${nmero1}, e seu sucessor, é ${nmero2}`);