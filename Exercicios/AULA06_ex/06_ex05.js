//05
const prompt = require( "prompt-sync" ) ();

var metros = Number(prompt('Quantos metros vc deseja converter? '));
var cm = metros * 100;
var mm = metros * 1000;
var km = metros / 1000;
console.log(`${metros} metros são ${cm} centímetros, ${mm} milímetros, e ${km} quilometros`);