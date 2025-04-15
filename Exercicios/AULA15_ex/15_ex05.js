const prompt = require( "prompt-sync" ) ();

function EXibirTabuada(num){

    for(let x = 0; x <= 10; x++) {
        console.log(`${num} x ${x} = ${num * x}`);
    }

}
EXibirTabuada(5)
