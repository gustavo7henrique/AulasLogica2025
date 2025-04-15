//Escopo de variáveis
//Variaével global pode ser acessada em qualquer lugar
//Variável local so pode ser acessada dentro do bloco

//Utilizando variaveis local
function NomeEscola(){
    escola = "SESI"
   console.log(`Valor dentro de uma função: ${escola}`);
   
}
 var escola = "SENAI"
 console.log(`Valor fora da função ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola}`);

 
//Utilizando variaveis local             //var -> global
                                        //let -> local
function NomeEscola2(){
    escola2 = "SESI"
   console.log(`Valor dentro de uma função: ${escola}`);
   
}
 var escola2 = "SENAI"
 console.log(`Valor fora da função ${escola2}`);
NomeEscola2();
console.log(`Valor após a função: ${escola2}`);

////////////////////////////////////////////////////////////
//Documentando funções usando JSDoc

/** 
* Soma dos dois números
*@param {number} a - Primeiro número
*@param {number} b - Segundo número
*@returns {number} - Soma dos dois números
*/
function Soma(a, b) {
    return a + b;
}
Soma(2,4);