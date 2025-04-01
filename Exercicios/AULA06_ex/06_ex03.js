// 03
const prompt = require( "prompt-sync" ) ();

var numero1 = prompt('Escolha um número:');
var dobro = numero1 * 2;
var triplo = numero1 * 3; 
var cubo = numero1 ** 3;
console.log(`O dobro de ${numero1}, é ${dobro}, o triplo é ${triplo}, e ao cubo é ${cubo}`);