function SenhaAleatoria(qtdeCaracteres){
    var listaCaracteres = ["!", "a", 5, "R", "$", "#", "g", "h", "@"];
    var senha = "qwertyuiopasdfghjklçzxcvbnm1234567890QWERTYUIOPASDFGHJKLÇZXCVBNM/.,;:~"
    for (let x = 1; x <= qtdeCaracteres; x++) {
    var posSorteada = Math.floor(Math.random()* listaCaracteres.length)
    senha = senha + listaCaracteres[posSorteada];

}

return senha;

}
var senhaGerada = SenhaAleatoria(5)
console.log(senhaGerada);
