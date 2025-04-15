const prompt = require( "prompt-sync" ) ();

// Usando prompt
function ParOuImpar () {
    var Numbero1 = prompt("Digite um Número: ");

    if (Numbero1 % 2 == 0) {
        console.log(`${Numbero1} é PAR`);
        
    } else {
    console.log(`${Numbero1} é IMPAR`)
}
    
}

ParOuImpar();
ParOuImpar();

console.log("- - - - - - - - PRÓXIMO - - - - - - - -");

//Usando parâmetro
function ParImpar (nmero) {
    if (nmero % 2 == 0) {
        console.log(`${nmero} é PAR`);
    } else {
        console.log(`${nmero} é IMPAR`)
    }

}

ParImpar(1);
ParImpar(2);

