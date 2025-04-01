// Exercícios JavaScript
const prompt = require( "prompt-sync" ) ();

//01
let number1 = Number(prompt("Qual é o 1º número?"));
let number2 = Number(prompt("Qual é o 2º número?"));
let soma = number1 + number2;
console.log(`a soma de ${number1} com ${number2} é igual à ${soma}`);