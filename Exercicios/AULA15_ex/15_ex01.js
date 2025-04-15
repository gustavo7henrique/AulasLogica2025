const prompt = require( "prompt-sync" ) ();

//Função sem parâmetro e sem retorno
function Saudacao () {
    var nome = (prompt("Digite seu Nome: "));
    console.log(`Tenha um bom dia, ${nome}!!`);
    
    
}

Saudacao();
Saudacao();
Saudacao();

