//Estrutura de laço de repetição -> "for"
const prompt = require( "prompt-sync" ) ();

//Incialização ; condição de for ; incremento da variavel
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
    
};
//////////////////////////////////////////////////////////////////
console.log("próximo ->");                                      //
//////////////////////////////////////////////////////////////////

for (let contador = 5; contador <= 50; contador++) {
    console.log(contador);
    
};
//////////////////////////////////////////////////////////////////
console.log("próximo ->");                                      //
//////////////////////////////////////////////////////////////////

//Incrementando de 5 em 5 no contador
for (let contador = 5; contador <= 50; contador+= 5) {
    console.log(`O contador é: ${contador}`);
    
};
//////////////////////////////////////////////////////////////////
console.log("próximo ->");                                      //
//////////////////////////////////////////////////////////////////

for (let contador = 1; contador <= 500; contador++) {
    console.log(contador);
    if (contador == 50) {
        break;
    }
};
//////////////////////////////////////////////////////////////////
console.log("próximo ->");                                      //
//////////////////////////////////////////////////////////////////

var nt = 6;
for(let contador1 = 1; contador1 <= 10; contador1++) {
    console.log(`${nt} X ${contador1} = ${nt * contador1}`);
    
}

//////////////////////////////////////////////////////////////////
console.log("próximo ->");                                      //
//////////////////////////////////////////////////////////////////

console.log(`Entregando os notebooks`);
for(var nr = 1; nr <= 32; nr++ ) {
    let nome = prompt(`Quem é o nº ${nr} : `);
    let presente = prompt(`${nome} está presente? (s/n): `);

}if (presente == 's') {
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até ${nome}`);
        
    } else {
        console.log(`Não pegar o notebook ${nr}`);
        
    }