const prompt = require( "prompt-sync" ) ();
///////////////////////////////////////////////////////

console.log("=====================================");
console.log("🤔       JOGO DA ADIVINHAÇÃO      🤔");                
console.log("=====================================");

var nrSecreto = Math.floor(Math.random() * 100) + 1;
var acertou = false;
var tentativa = 0;

while(acertou == false) {    // Enquanto (acertou == false), vou ficar rodando neste bloco
    let chute = Number(prompt("Digite um nº entre 1 e 100: "))
    tentativa++

    if (chute == nrSecreto) {
    console.log(`Parabéns, você ACERTOU com ${tentativa} tentativa(s)!!! 👍`);       
        acertou = true;

    } else if (chute > nrSecreto) {
        console.log(`Voce chutou ${chute}, tente um número menor `);
        
    } else if (chute < nrSecreto) {
        console.log(`Voce chutou ${chute}, tente um número maior `);
        
    } 
}
    console.log(`FIM`);
    




