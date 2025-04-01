//Exercício 05
const prompt = require( "prompt-sync" ) ();
//////////////////////////////////////////////////////////////

var siM = 0;
var qtdM = 0;
var siF = 0;
var qtdF = 0;


for(var x = 1; x <= 10; x++) { 
let idade = Number(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo: (M/F) ");

     if (sexo == 'M') {
        qtdM++;
        siM = siM + idade;
    } else if (sexo == 'F') {
        qtdF++;
        siF = siF + idade;
    } else {
        console.log("Besta");
        
    }
}
console.log(`A média do sexo masculino é de ${siM / 10}`);
console.log(`A média do sexo feminino é de ${siF / 10}`);
console.log(`A média do grupo é de ${(siF + siM) / 10}`);

