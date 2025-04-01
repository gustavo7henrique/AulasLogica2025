//09
const prompt = require( "prompt-sync" ) ();

var preco = Number(prompt('Qual o preço do produto? '));
var novoPreco = (5/100) * preco;
console.log(`o produto de ${preco} reais, com 5% de desconto fica apenas ${novoPreco} reais`);