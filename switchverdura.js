

var readlineSync = require("readline-sync");
var nome = readlineSync.question("qual o seu nome ?")
var dia = readlineSync.question("Olá" + nome +", qualqual a fruta que você quer comprar ?")

switch (dia){
    case "maca":
    console.log("a maca custa 1,99");
    break;
    case "pera":
    case "uva":
    console.log("custa 2,99");
    break
    case "abacate":
    console.log("custa 10,99");
    break
    case "banana":
    console.log("1,25");
    break
    case "morango":
    case "melancia":
    console.log(" custa 1,50")
    
}

