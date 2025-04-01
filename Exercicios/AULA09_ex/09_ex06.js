//06 
const prompt = require( "prompt-sync" ) ();

var clt = Number(prompt(" Quanto voce recebe de salário? "));

if (clt <= 2000) {
    console.log(`Reajuste de 12% no salário ->${clt * 12/100 + (clt)}`);

} else {
    
    if (clt > 2000 && clt <= 4000) {
        console.log(`Reajuste de 10% no salário -> ${clt * 10/100 + (clt)}`);

    }  else if (clt > 4000) {
    console.log(`Reajuste de 8% no salário -> ${clt * 8/100 + (clt)}`);
        
    }
};