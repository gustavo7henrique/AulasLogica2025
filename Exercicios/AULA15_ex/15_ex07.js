function Soma (nr1,  nr2) {
    console.log(nr1 + nr2)
    
}
function Subtracao (nr1,  nr2) {
    console.log(nr1 - nr2);
    
}
function Multiplicacao (nr1,  nr2) {
    console.log(nr1 * nr2);
    
}
function Divisao (nr1,  nr2) {
    console.log(nr1 / nr2);
    
}
function Calcular(nr1, nr2, op) {
    if (op == "+") {
        Soma (nr1,nr2)
    }
    else if (op == "-") {
        Subtracao (nr1,nr2)
    }
    else if (op == "*") {
        Multiplicacao (nr1,nr2)
    }
    else if (op == "/") {
       Divisao (nr1,nr2)
    }
}
Calcular(5, 6, "*")