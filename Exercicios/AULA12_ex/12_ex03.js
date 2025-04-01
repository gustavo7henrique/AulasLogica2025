//Exercício 03
var comidas = [];
for (var x = 1; x <= 6; x++){
    let comidas = prompt("digite uma comida: ");
    comidas.push(comida);
}

console.log(comidas);

console.log(`O 1º filme da lista é: ${comidas[0]}`);

console.log(`O filme da 4ª posição é o: ${comidas[3]}`);

comidas.splice(7, 0, "NFS"); console.log(comidas);

comidas.push ("V&F 8"); console.log(comidas);

comidas.splice(5, 0, "Sherek"); console.log(comidas);

comidas.shift(); console.log(comidas);
    
comidas.pop();  console.log(comidas);

console.log(comidas.slice(0, 3));

console.log(comidas.slice(3, 7));

console.log(comidas.length);

comidas.reverse(); console.log(comidas);


