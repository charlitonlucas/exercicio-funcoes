

var readlineSync = require("readline-sync");
var dia = readlineSync.question("qual o dia da semana ?")

switch (dia){
    case "segunda":
    console.log("começou a semana");
    break;
    case "terça":
    case "quarta":
    console.log("aguenta ai e pega café");
    break
    case "quinta":
    console.log("tá chegando o fds");
    break
    case "sexta":
    console.log("sextou!");
    break
    case "sábado":
    case "domingo":
    console.log(" Fds chegou")
    
}

