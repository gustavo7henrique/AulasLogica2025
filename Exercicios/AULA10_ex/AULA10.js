//Estrutura de laço de repetição "While"
//Exemplo 1

const prompt = require( "prompt-sync" ) ();

let resposta = "s";

while (resposta == "s") {
    console.log(` Você está dentro do bloco `);
    resposta = prompt("Deseja continuar ? s/n ")
}

console.log( ` Fim >=( ` );

/////////////////////////////////////////////////////////////////////////////////////////////////
//Exemplo 2

var senha = "2025";
var senhaErrada 

while (senha != senhaErrada) {
    console.log("Tente Novamente");
    senhaErrada = prompt("Qual é a senha?: ")
    
}
console.log(`Parabéns você acertou!!! `);

///////////////////////////////////////////////////////////////////////////////////////////////
//Executando um número determinado de vezes
//Exemplo 2 

var contador = 1;
while (contador <= 5) {
    console.log(`O contador esta no nº ${contador}`);
    contador ++; //contador = contador + 1
}
    console.log(`Denada`);
///////////////////////////////////////////////////////////////////////////////////////////////
//Exemplo 4
//posso deixar meu laço executando sem uma condição expecífica,
//apenas com "while" (true) e encerrar o loop com o comando break

var total = 0;
var qtd = 0;

while (true) {
    var valor = Number(prompt(`Digite o valor do produto: (0 para encerrar): `));
    
    if (valor == 0 ) {
        break;
     } else {
        total = valor + total;
        qtd++;
    }       
    
}
    console.log(`Você comprou ${qtd} produtos`);
    console.log(`Você gastou um total de: ${total.toFixed(2)} reais`);
    



