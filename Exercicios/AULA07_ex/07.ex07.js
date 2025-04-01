//07
const prompt = require( "prompt-sync" ) ();

var velocidade = parseInt(prompt('Qual velocidade você passou no radar? '));

if (velocidade > 80 ) {
    let multa = (velocidade - 80)* 7;

    console.log(`Multado no valor de ${multa * 7} reais`);
} else {
    console.log(`NÃO RECEBE MULTA`);
}
