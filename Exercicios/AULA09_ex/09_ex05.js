//05
const prompt = require( "prompt-sync" ) ();

var n1 = Number(prompt(" Qual a 1ª nota? "));
var n2 = Number(prompt(" Qual a 2ª nota? "));
var md = (n1 + n2) / 2

if (md >= 7) {
    console.log(`APROVADO`);

} else {
    
    if (md >= 5 && md < 7) {
        console.log(`RECUPERAÇÃO`);

    }  else if (md < 5) {
    console.log(`REPROVADO`);
        
    }
};