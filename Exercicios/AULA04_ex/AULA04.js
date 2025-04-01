const prompt = require( "prompt-sync" ) ();

//Criando nossa primeira variavel
//Uma variavel serve para armazenar uma informação/ valor
//o memoria crie um espaçoicom o nome curso e receba o valor "Desenvolvimeto de Sistemas"
var curso = "Desenvolvimeto de Sistemas";

//Exibindo o conteudpo da variavel
console.log('curso'); //Para imprimir um avariavel,não se coloca entre ' '
console.log(curso); //Jeito correto de usar um variavel
console.log('curso', curso);

//Criando e atribuindo valores a uma variavel
var idade = 15; //inteira //intiger
var temperatura = 24.5; //real //float
var nome = "gustavo henrique"; //string

console.log ('ola,', nome , 'voce tem', idade, 'anos');
console.log ('está cursando', curso, 'hoje faz', temperatura , '°C');

console.log ('ola' + nome + 'voce tem'+ idade + 'anos');
console.log ('está cursando'+ curso + 'hoje faz'+ temperatura + '°C');

//Template String
//Na tempate string, utilizo a crase ` `para criar uma string
//Para colocar variaveis dentro da string, utilizo ${variavel}
console.log(`opa, ${nome} vc tem ${idade} anos
       esta cursando ${curso} e hoje faz ${temperatura}°C `);

//Declarando uma variavel logica,oun boolean/boleana (true ou false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando vatriavel nula/ sem valor
var escola;

//Exercicio 

//Nota1 - valido
//nomeCompleto - valido
//Nome Completo - invalido
//Média - invalido
//console - invalido
//_salario - valido
//9dade - invalido
//Minha_Variavel - valido
//var - invalido
//valor$ - invalido
//nome-completo - invalido 
//escola_ - valido
//TELEFONE - valido 
//true - invalido

let cidade = 'Andradina'
var turma = '2º B' 
const ano = 2025

console.log(turma);
turma ='3º B' //Reatribuindo o valor de uma variavel
console.log(turma);
// ano = 2026; //Nao podemos reatribuir valor a uma constante 

var nomeCompleto = "Ayton Senna" //padrao "camelCase"
var saldo_conta = 123.45 // padrão "snake_case"
var AnoNovo = 2025 // padrão "PascalCase"

//Novo Exercício
let _nome = 'gustavo henrique' //string
let _idade = 15;  //number
let _peso = 59.0;  //number
console.log(_nome, _idade, _peso); 

//No prompt o computador espera o usuariodigitar uma informação
//Sempre quando recebemos uma informação de entrada ela vem em STRING
_nome = prompt("Qual o seu nome?"); 
_idade = prompt("qual sua idade?"); 
_peso = prompt("qual seu peso?"); 
console.log("Olá", _nome, "voce tem", _idade, "anos", "e pesa",  _peso , "kg");

//Criem duas variaveis, num1 e num2 e recebam as informações pelo prompt
var num1 = prompt("Qual o primeiro numero?");
var num2 = prompt("Qual o segundo número?");
console.log( num1 + num2);

console.log("bom dia, o primeiro numero é", num1, "e o segundo número é", num2, "tenha um bom dia !!!");

console.log(typeof num1); //string
num1 = Number(num1); //convertendo a variavel do tipo string para Number
console.log(typeof num1); //number

//Receber uma informação ja convertendo seu tipo de dados
let nr1 = Number(prompt("digite o primeiro nº"));
let nr2 = Number (prompt("digite o segundo nº"));
console.log (nr1 + nr2);

//convertendo dados de uma variavel
nr1 = "100.14" //string
nr1 + Number("100.14"); // convertendo string para Number
nr1 = parseInt('100.14'); //convertendo String para interger
nr1 = parseFloat("100"); //convertendo String para float 100.00 
nr1 = String(100.14); //convertendo um Number para String



_nome = prompt("Qual o seu nome?");             //string
_idade = parseInt(prompt("qual sua idade?"));   //Int
_peso = parseFloat (prompt("qual seu peso?"));  //Float
console.log("Olá", _nome, "voce tem", _idade, "anos", "e pesa",  _peso , "kg");   

// const prompt = require( "prompt-sync" ) ();

//Exercícios Variaveis
var nomeAluno =("Gustavo Henrique");
var altura =("1.73");
var escola =("SESI");
var anoAtual =("2025");
// 2
let nomeProfessor = prompt("qual o nome do professor?");
let materia = prompt("qual a metéria desse professor?");
let anoIngresso = prompt("qual o ano emque o professor ingressou?");
console.log("Olá, o professor se chama", nomeProfessor, "ele da aula de", materia, "e ele ingressou no cursono ano de", anoIngresso); 
// 3
anoAtual = Number(parseIn("2025"));
anoIngresso = Number(parseInt("qual o ano emque o professor ingressou?"));
altura = Number(parseFloat("1.73"));
