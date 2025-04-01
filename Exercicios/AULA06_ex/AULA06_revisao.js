//Importando biblioteca para receber informação do usuario
const prompt = require( "prompt-sync" ) ();

//Declarando variavel sem dados (undefined)
let nota;
//Declarando variavel com informação 
let nome = "Carlos";

//Reatribuindo valor a variavel nome
nome = "Roberto";
nota = 9.5;

// Entrada de dados em noso programa
let sobrenome = prompt("digite seu sobrenome:");
let nota1 = Number(prompt("digite a nota da 1ª prova: "));
let nota2 = Number(prompt("digite a nota da 2ª prova: "));

let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + '' + sobrenome;
let nomeCompleto2 = `${nome} ${sobrenome}`; 
let idade = prompt("digite sua idade: ")
let idedeNumber = parseInt(idade)


// Saída dos dados =)
console.log("---Relatório Final---");
console.log(`O seu nome é: ${nomeCompleto} \n sua idade ${idade}` );
console.log('O seu nome é: ' + nomeCompleto + '\n sua idade' + idade);
console.log(` Sua média é: ${media}`);

let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n + 1; //3
n += 1;    //4
n++;       //5
n += 3;    //8
n--;       //7
n = n-1;   //6
n -= 2;    //4

var hora = 8
var dias = 15
var valorHora = 100
var custoTotal = (hora*dias)*valorHora 
console.log(`o custo total do projetoserá de: ${custoTotal}`)

