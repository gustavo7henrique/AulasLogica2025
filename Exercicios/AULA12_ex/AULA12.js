// Aula 12
// Variáveis Compostas / Vetores / Arrays

////////////////////////////////////////////////////////////////////////////////////

// Variável Simples
var fruta = "pera";
fruta = "banana";

console.log("===========================================================================");
///////////////////////////////////////////////////////////////////////////////////

// Variável Composta, cabe mais de 1 dado
var frutas = ["banana", "maçã", "abacaxi", "uva",]
console.log(frutas);
console.log(frutas[0]);

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//DEclarando lista vazia
var listaVazia = [];

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Declaração de uma lista de números
var nmeros = [1, 2, 3, 4, 5, ];

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Declarção de um lista de Strings
var nomes = ["José", "Maria", "Silvia", "Odete", "Maicon"];

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Declaração de umalista mista
var listaMista = [1, "josé", true, 7.55]; 
            // Number, String, Bolean, Float

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Declaração com lista dentro de outra lista
var listadeVetores = [["coca cola", "hot-dog"],[5.00, 10.00]];
console.log(listadeVetores[0][1]);

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Alterando o conteúdo de um item da lista
frutas[3] = "melancia"
console.log(frutas);

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Inserindo um novo item na lista
//frutas[4} = "Laranja"
frutas.push("laranja"); //Usando método "push"
frutas = [...frutas, "Laranja"]; //Utilizando o operador spread
console.log(frutas);

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

frutas.splice(2, 0, "Morango")
console.log(frutas);
//   2 - posição
//   0 - Quantidade de itens a serem aprovados

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

//Excluindo itens da lista
frutas.splice(3, 1);  //Exclui  pelo índice
//    3 - posições
//    1 - qtd de item a ser excluida
frutas.shift()       // Exclui o primeiro item da lista
frutas.pop()        //Remove oultimo item da lista
console.log(frutas);

console.log("===========================================================================");
//////////////////////////////////////////////////////////////////////////////////

frutas = ["Maça", "Banana", "Morango", "Abacaxi", "Melancia", "Laranja", "Uva" ];
console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);

console.log("===========================================================================");
///////////////////////////////////////////////////////////////////////////////////

//Ordenando a lista do maior para o menor
frutas = ["Maça", "Banana", "Morango", "Abacaxi", "Melancia", "Laranja", "Uva" ]; 
frutas.sort() //Ordenando lista em ordem crescente
console.log(frutas);
frutas.reverse() //Ordenando lista em ordem decrescente
console.log(frutas);

///////////////////////////////////////////////////////////////////////////////////
