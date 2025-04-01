const prompt = require( "prompt-sync" ) ();

//Exercícios Variaveis
var nomeAluno =("Gustavo Henrique");
var altura =("173.53");
var escola =("SESI");
var anoAtual =("2025");

// 2
let nomeProfessor = prompt("qual o nome do professor?");
let materia = prompt("qual a metéria desse professor?");
let anoIngresso = prompt("qual o ano em que o professor ingressou?");
console.log("Olá, o professor se chama", nomeProfessor, "ele da aula de", materia, "e ele ingressou nesse curso no ano de", anoIngresso);

// 3
anoAtual = parseInt(prompt("qual o ano em que estamos?"));
anoIngresso = parseInt(prompt("qual o ano em que o professor ingressou?"));
altura = parseFloat(prompt("qual a sua altura?"));
console.log("bom dia, estamos no ano de", anoAtual, "mas o professor ingressou no curso no ano de", anoIngresso, "e voce mede", altura, "centímetros");
