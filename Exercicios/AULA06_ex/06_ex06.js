//06
const prompt = require( "prompt-sync" ) ();

var numeroX = Number(prompt('A tabuada de qual numero vc quer saber? '));
var nmero1 = numeroX * 1;
var nmero2 = numeroX * 2;
var nmero3 = numeroX * 3;
var nmero4 = numeroX * 4;
var nmero5 = numeroX * 5;
var nmero6 = numeroX * 6;
var nmero7 = numeroX * 7;
var nmero8 = numeroX * 8;
var nmero9 = numeroX * 9;
var nmero10 = numeroX * 10;

console.log(`A tabuada de ${numeroX} é: \n
${numeroX} x 1 = ${nmero1}
${numeroX} x 2 = ${nmero2}
${numeroX} x 3 = ${nmero3}
${numeroX} x 4 = ${nmero4}
${numeroX} x 5 = ${nmero5}
${numeroX} x 6 = ${nmero6}
${numeroX} x 7 = ${nmero7} 
${numeroX} x 8 = ${nmero8}
${numeroX} x 9 = ${nmero9}
${numeroX} x 10 = ${nmero10}
espero ter ajudado =)`);



// Maneira diferente criando apenas uma variavele jogando direto no console.log
var num = Number(prompt('Qual numero vc quer? '));
console.log(` A tabuada de ${num} é: \n
    ${num} x 1 = ${num * 1}
    ${num} x 2 = ${num * 2}
    ${num} x 3 = ${num * 3}
    ${num} x 4 = ${num * 4}
    ${num} x 5 = ${num * 5}
    ${num} x 6 = ${num * 6}
    ${num} x 7 = ${num * 7}
    ${num} x 8 = ${num * 8}
    ${num} x 9 = ${num * 9}
    ${num} x 10 = ${num * 10}`);