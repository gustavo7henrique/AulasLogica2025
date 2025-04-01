// Estrutura condicional composta e encadeada
// Operadores lógicos
// && - e
// || - ou
// ! - não

var a = 2;
var b = 3;
var c = 5;
console.log(a > 2 && b < 2); // False, pq 2 condição é F
console.log(a > 1 && b < 2); // False pq apenas 1 condição é verdadeira
console.log(a > 1 && b < 4); // True pq 2 condições é V
console.log(a > 1 && b < 4 && c > 4); // True, todas condição V
console.log(a > 1 && b < 4 && c > 5); // True



console.log(a > 2 || b < 2); // False, nenhuma condição é verdadeira
console.log(a > 1 || b < 2); // True, tem pelo menos uma verdadeira
console.log(a > 1 || b < 4); // True, as duas condições são  verdadeiras
console.log(a > 1 || b < 4 || c > 4); // True 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const prompt = require( "prompt-sync" ) ();

var altura = Number(prompt("Qual é sua altura? "));
var peso = Number(prompt("Quanto você pesa? "));
var imc = peso / (altura ** 2);

if ( imc < 18.5 ) {
    console.log("Voce esta abaixo do peso ideal");
} else if ( imc >= 18.5 && imc < 25) {
    console.log("Voce está no peso ideal" );
} else if (imc >= 25 && imc < 30) {
    console.log("Voce esta com sobrepeso");
} else {
    console.log("Voces esta obeso / com obesidade");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var l1= Number(prompt("Qunato mede o 1º lado do triangulo? "));
var l2 = Number(prompt("Qunato mede o 2º lado do triangulo? "));
var l3 = Number(prompt("Qunato mede o 3º lado do triangulo? "));

if (l1 == l2 && l2 == l3 && l3 == l1) {
    console.log(" È um triangulo equilatero");
} else if ( l1 != l2 && l2 != l3 && l3 != l1 ){
    console.log("È um triangulo escaleno");   
} else  {
    console.log(" è um triangulo Isóceles"); 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var v= Number(prompt("Qual o valor das vendas? "));
var h = Number(prompt("Qunatas horas ele trabalhou? "));

if (v > 5000 || h > 40) {
    console.log("PARABÉNS! Você vai receber um bônus merreca, quer mais? TRABALHE O DOBRO!");
} else {
    console.log("Preguiçoso, trabalhe mais, seu patrão vai te DEMITIR")
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ctr = prompt("Qual o caractere você quer? ");

if ( ctr == "a" || ctr == "e" || ctr == "i" || ctr == "o" || ctr == "u") {
    console.log("É VOGAL");
} else {
    console.log("É CONSOANTE");
    
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////