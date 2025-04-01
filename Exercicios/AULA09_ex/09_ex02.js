//02
const prompt = require( "prompt-sync" ) ();

var atual = Number(prompt(" Em que ano estamos? "));
var nasceu = Number(prompt(" Em que ano voce nasceu? "));
var diferenca = atual - nasceu

if (diferenca <= 10) {
    console.log(`Criança`);

} else {
    
    if (diferenca > 10 && diferenca <= 17) {
        console.log(`Adolescente`);

    }  else if (diferenca >= 18 && diferenca <= 59) {
    console.log(`Adulto`);
    
    } else {
        console.log(`Idoso`);
        
    }
};