// Desafio 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// IRPF
const prompt = require( "prompt-sync" ) ();

var salario = Number(prompt(" (IRPF) Quanto voce recebe de salário? ")); 

if (salario <= 2259.20) {
    console.log(` Desconto de 0% no salário -> ${salario}`);

} else {
    
    if (salario > 2259.20 && salario <=  2826.65) {
        console.log(`Desconto de 7.5% no salário -> ${salario - (salario * 0.075)}`);

    } else if (salario > 2826.65 && salario <= 3751.05) {
        console.log(`Desconto de 15% no salário -> ${salario - (salario * 15/100)}`);
   
    } if (salario > 3751.05 && salario <= 4664.68) {
        console.log(`Desconto de 22.5% no salário -> ${salario - (salario * 22.5/100)}`);

    } else if (salario > 4664.68) {
        console.log(`Desconto de 27.5% no salário -> ${salario - (salario * 27.5/100)}`);
    }

};
///////////////////////////////////////////////////////////////////////////////////////////////////////

//INSS
var slr = Number(prompt(`Quanto você recebe de salário? (INSS)  `))

if (slr <= 1412.00) {
    console.log(` Desconto de 7.5% no salário -> ${slr - (slr * 7.5/100)}`);

} else {

if (slr > 1412.00 && slr <= 2666.68) {
    console.log(`Desconto de 9% no salário -> ${slr - (slr * 9/100)}`);

} else if (slr > 2666.68 && slr <= 4000.03){
    console.log(`Desconto de 12% no salário -> ${slr - (slr * 12/100)}`);    

} if (slr > 4000.03 && slr <= 7786.02) {
    console.log(`Desconto de 14% no salário -> ${slr - (slr * 14/100)}`);
    
} else if (slr > 7786.86) {
    console.log(`Desconto de 908.85 no salário -> ${slr - 908.85}`);
    
}
};

