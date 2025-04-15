//////////////////////////////////////////////////////////////////
//Criando função usando "function" sem Parâmetro e sem Retorno

function Linha () {
    console.log(" - * - * - * - * - * - * - ");
    
}

Linha();
console.log("SESI / SENAI");
Linha();

console.log("- - - - - - - - PRÓXIMO - - - - - - - -");

function Cabecalho () {
    Linha();
    console.log("       SESI / SENAI        ");
    Linha();
}

Cabecalho(); 

console.log("- - - - - - - - PRÓXIMO - - - - - - - -");

////////// Com Parâmetro e sem retorno //////////
function CabecalhoEscola (nomeEscola) {    //    (nomeEscola) -> Parâmetro da função
    Linha();
    console.log(nomeEscola);
    Linha();
}

CabecalhoEscola("           UNESP    "); 
CabecalhoEscola("           SESI    ");
CabecalhoEscola("     Tralalero Tralala    ");
 

console.log("- - - - - - - - PRÓXIMO - - - - - - - -");

function Soma (nr1,  nr2) {
    var resultado = nr1 + nr2
    console.log(resultado);
    
}

Soma (5, 8);

console.log("- - - - - - - - PRÓXIMO - - - - - - - -");

//Função com Parâmetro e com Retorno
function media (n1, n2) {
    var resultado = (n1 + n2) / 2;
    return resultado;
}

var valor = media(2025, 25);
console.log(valor);
