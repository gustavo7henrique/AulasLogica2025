//Exercício 01
var filmes = ["V&F 1",
    "V&F 2",
    "V&F 3",
    "V&F 4",
    "V&F 5",
    "V&F 6",
    "V&F 7",];

console.log(filmes);

console.log(`O 1º filme da lista é: ${filmes[0]}`);

console.log(`O filme da 4ª posição é o: ${filmes[3]}`);

filmes.splice(7, 0, "NFS"); console.log(filmes);

filmes.push ("V&F 8"); console.log(filmes);

filmes.splice(5, 0, "Sherek"); console.log(filmes);

filmes.shift(); console.log(filmes);
    
filmes.pop();  console.log(filmes);

console.log(filmes.slice(0, 3));

console.log(filmes.slice(3, 7));

console.log(filmes.length);

filmes.reverse(); console.log(filmes);










