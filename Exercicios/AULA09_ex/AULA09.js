// Estruturas Condicioniais Alinhadas
// Switch Case

const prompt = require( "prompt-sync" ) ();

/////////////////////////////////////////////////////////////////////////////////////////////////

var compra = Number(prompt("Quantos reais voce gastou com sua compra? "));
var ClienteVip = true;

if (compra >= 100) {
    if (ClienteVip == true) {
        console.log(` Voce ganhou R$ ${compra * 10 / 100}`);
    } else {
        var desconto = compra * 5 / 100
        console.log(` Voce ganhou R$ ${desconto} de desconto `);   
}

} else {
    var restante = 100 - compra
console.log(`Compre mais R$ ${restante} e ganhe desconto`);
    
}
/////////////////////////////////////////////////////////////////////////////////////////////////

var idade = Number(prompt(" Quantos anos de idade voce tem? "));

if (idade < 16) {
    console.log(`Não Pode Votar`);

} else {
    
    if (idade >= 18 && idade <= 70) {
        console.log(` Voto Obrigatório`);

    }  else {
    console.log(` Voto Facultativo`);
    
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////

// Swhitch Case é uma alternativa ao if else

var n1 = Number(prompt("Qual o 1º número? "));
var n2 = Number(prompt("Qual o 2º número? "));
var op = prompt("Digite o operador (+ - / * **): ");

switch (op) {
    case '+':                   //if (op == '+')
        console.log(n1 + n2);
        break;
    case '-':                   //else if (op == '-')
        console.log(n1 - n2);
        break;
    case '/':                   //else if (op == '/')
        console.log(n1 / n2);
        break;
    case '*':                   //else if (op == '*')
        console.log(n1 * n2);
        break;
    case '**':                  //else if (op == '**')
        console.log(n1 ** n2);
        break;
        default:                //else 
            console.log("Operador Inválido");    
}

/////////////////////////////////////////////////////////////////////////////////////////////////


