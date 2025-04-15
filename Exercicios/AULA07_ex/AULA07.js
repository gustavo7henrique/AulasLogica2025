// Operadores relacionais
// == quer dizer igual, igualdade
// != quer dizer diferente

const prompt = require( "prompt-sync" ) ();

let a = 2;
let b = 3;
console.log(a > b); //false
console.log(a == b); //false
console.log(a != b); //true
console.log(a > 2); //false
console.log(a >= 2); //true

// if -> estrutura de condição usada na programçaõ

let tenhoIngresso = true;
 if(tenhoIngresso == true ) { // se a condição for verdadeira
    //Entra nesse boco de comando
    console.log('posso entrar no show');
}
//////////////////////////////////////////////////////////////////////////////////////////
let idade = Number(prompt('Qual a sua idade '));
if (idade >= 18) {
    console.log("maior de idade, pode entrar");
} else {
    console.log("menor de idade, não pode entrar");
}

///////////////////////////////////////////////////////////////////////////////////////////
let tenho_ingresso = false
if (tenho_ingresso == true) {
    console.log("posso entra no show");
} else {         // Se a codiçaõ for false
    console.log("estou barrado na portaria");
}

///////////////////////////////////////////////////////////////////////////////////////////


