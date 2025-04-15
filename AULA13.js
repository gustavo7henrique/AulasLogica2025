const prompt = require( "prompt-sync" ) ();
//Interação sobre nossos vetores (Arrays / Listas)

//Vetor         0        1         2         3
frutas = ["Maçã","Banana", "Abacaxi", "Uva"];
//Para interar sobre um vetor, utilizamos o for
for (var x = 0; x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} e: ${frutas[x]}`);

}
console.log("FIM =)");

console.log("==============Próximo================");
////////////////////////////////////////////////////////////////////////////////////////////
//Interando sobre uma lista usando o for of

var goats = ["CR7", "Neymar", "Pelé", "Bobby Charlton"];
for (var jogador of goats) {
    console.log(` O Jogador é: ${jogador}`);
    
};

console.log("==============Próximo================");
/////////////////////////////////////////////////////////////////////////////////////////////

var numeros = [1, 2, 3, 4, 5];
for (var numeros1 of numeros) {
    console.log(`O número é: ${numeros1}`);
    
};

console.log("==============Próximo================");
/////////////////////////////////////////////////////////////////////////////////////////////
//Verificando se um elemento existe em um array usando include()

var vogais = ["a", "e", "i", "o", "u"];
var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var numeros = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var verificar = prompt("Digite uma letra ou um número: ");
    if (vogais.includes(verificar.toLowerCase())) {
    console.log(`A letra ${verificar} é uma vogal`);
    } else if (consoantes.includes(verificar.toLowerCase())){
        console.log(`A letra ${verificar} é uma consoante`);
    } else if (numeros.includes(verificar.toLowerCase())){
        console.log(`${verificar} é um número`);
    } else {
        console.log(`${verificar} não é letra nem número`);
        
    };

    console.log("==============Próximo================");
/////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////
//Separando uma string utilizando o split()

var produtos = "Celular, Notebook, TV, Tablet, Monitor";
var listaProdutos = produtos.split(",");
console.log(produtos);
console.log(listaProdutos);

console.log("==============Próximo================");
//////////////////////////////////////////////////////////////////////////////////////////////
//Strings são lista (vetores / arrays) de caracteres

//            01231
var escola = "SENAI";  //["S", "E", "N", "A", "I"]
console.log(escola[0]);
//Utilizando o for of exibir a palavra da seguinte forma:
//S
//E
//N
//A
//I

var escola = "SENAI";
for (var letras of escola) {
    console.log(`A palvra é: ${letras}`);

}