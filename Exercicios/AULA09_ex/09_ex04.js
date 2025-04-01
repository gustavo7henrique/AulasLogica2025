//04
const prompt = require( "prompt-sync" ) ();

var nmes = prompt("Digite um nome de um mês: ");

switch (nmes) {
    case 'janeiro':                   
        console.log("Possui 31 dias");
        break;
    case 'fevereiro':                   
        console.log("Possui 28 dias");
        break;
    case 'marco':                   
        console.log("Possui 31 dias");
        break;
    case 'abril':                   
        console.log("Possui 30 dias");
        break;
    case 'maio':                   
        console.log("Possui 31 dias");
        break;
    case 'junho':                   
        console.log("Possui 30 dias");
        break;
    case 'julho':                   
        console.log("Possui 31 dias");
        break;
    case 'agosto':                   
        console.log("Possui 31 dias");
        break;
    case 'setembro':                   
        console.log("Possui 30 dias");
        break;
    case 'outubro':                   
        console.log("Possui 31 dias");
        break;
    case 'novembro':                   
        console.log("Possui 30 dias");
        break;
    case 'dezembro':                   
        console.log(" Possui 31 dias");
        break;
    default:                 
        console.log("Inválido");    
}