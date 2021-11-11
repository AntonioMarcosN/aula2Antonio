/*function soma (a,b) {
    return a+b
}

console.log (soma(2,5))

function subtracao (a,b) {
    return a-b
}

console.log (subtracao(2,5))

function multiplicacao (a,b) {
    return a*b
}

console.log (multiplicacao(2,5))

function divisao (a,b) {
    return a/b
}

console.log (divisao(2,5))
*/

/*const input = require("readline-sync");

console.log("== Olá! Qual o dia que você quer saber. ==")
const diaDaSemana = input.question("Digite o dia: ")


switch (diaDaSemana) {
    case "domingo":
        console.log ("Domingou")
        break
    case "sabado":
        console.log ("Sabadou")
        break
    case "sexta":
        console.log ("Sextou")
        break
    default:
        console.log(`${diaDaSemana} não é um dia festivo.`)
        
}*/

/*const input = require("readline-sync");

console.log("== Olá! Qual o dia que você quer saber seu número. ==")
const diaDaSemana = input.question("Digite o dia: ")


switch (diaDaSemana) {
    case "domingo":
        console.log ("1")
        break
    case "segunda":
        console.log ("2")
        break
    case "terça":
        console.log ("3")
        break
    case "quarta":
        console.log ("4")
        break
    case "quinta":
        console.log ("5")
        break
    case "sexta":
        console.log ("6")
        break
    case "sabado":
        console.log ("7")
        break
    default:
        console.log(`${diaDaSemana} não é um dia da semana.`)
        
}*/

/*var frutas = 15
var alunos = 10

var merenda = frutas/alunos

console.log(merenda)

var merenda = frutas*(alunos/2)

console.log(merenda)

var merenda = frutas/(10*100)

console.log(merenda)*/

//Crie um algoritimo que leia o valor de uma conta e a quantidade de amigas, 
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago
//e o valor para cada amiga.


const input = require("readline-sync");

console.log("==Olá! Vamos ver quanto será o valor a ser pago por cda amigo?==")
const totalConta = parseInt(input.question("Digite o valor total da conta: "))
const totalAmigos = parseInt(input.question("Digite a quantidade de amigos: "))

ta = totalAmigos
tc = totalConta
tcDez = (tc*10)/100
let soma = tc+tcDez

console.log(tc);

console.log(tcDez);

console.log(soma);

console.log((tc+tcDez)/ta);



