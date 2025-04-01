// Exercício 03
const prompt = require( "prompt-sync" ) ();
/////////////////////////////////////////////////////////

var pares = 0;
var impares = 0;
var somap = 0;
var somai = 0;

while(true) {
    var num = Number(prompt(`Digite um nº: `))

    if (num == 0) {
        break;
    }
    if (num % 2 == 0) { //par
        pares++;
        somap = somap + num;
    } else {
        impares++
        somai = somai + num;
    }
} 
    console.log(`Você digitou ${pares} nº pares, somadas resultou em ${somap}`);
    console.log(`Você digitou ${impares} nº pares, somadas resultou em ${somai}`);
    
