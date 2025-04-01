 const prompt = require( "prompt-sync" ) ();

 //Operações com variaveis    

 //adição
 var numero1 = 2000;
 var numero2 = 25; 
 var soma_ = numero1 + numero2; 
 console.log(`a soma entre ${numero1} e ${numero2} é igual a ${soma_}`);

 //subtração
 var numero1 = 2000;
 var numero2 = 25; 
 var subtracao_ = numero1 - numero2; 
 console.log(`a subtração entre ${numero1} e ${numero2} é igual a ${subtracao_}`);

 //divisão
 var numero1 = 2000;
 var numero2 = 25; 
 var divisao_ = numero1 / numero2; 
 console.log(`a divisão entre ${numero1} e ${numero2} é igual a ${divisao_}`);

 //multiplicação
 var numero1 = 2000;
 var numero2 = 25; 
 var multiplicacao_ = numero1 * numero2; 
 console.log(`a multiplicção entre ${numero1} e ${numero2} é igual a ${multiplicacao_}`);


//Exercício - Alterando o valor da  variavel

var precoCelular = 1500;
var valorDesconto = 300;
precoCelular = precoCelular - valorDesconto;
console.log(`a promoção do celular com R$ ${valorDesconto} de desconto, por apenas R$ ${precoCelular}`);

//Reatibuição de valor de variavel
var nmero = 4/2;
nmero = nmero **2;
nmero = nmero * (50-20);
console.log('o valor é:', nmero);
console.log(`o valor é: ${nmero}`);


let valor_ = Number(prompt("qual é o numero que você quer ?"));
let dobro = valor_*2;
let metade = valor_/2;
console.log(`o dobro e a metade de ${valor_} é: ${dobro} e ${metade}`);

//exercício - custo de projeto
let horas = Number(prompt("Quantas horas de trabalho vc faz por dia? "));
let custo = (horas * 15) * 100
console.log(`o custo do projeto será de: ${custo} reais`)

//maneira simples do exercício acima
console.log(` o custo do projedto será de ${(8*15)*100} reais`)


