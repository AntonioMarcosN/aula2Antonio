

//Vamos aprender a concatenar string

"Hello"
'Hello'

//concatenar

/*console.log("Hello" + " " + "World")

console.log("Hello" + 'World')

var myName = 'Antonio';
console.log("Hello" + " " + myName)

let myName2 = "Carlos";
console.log(`Hello ${myName2}`)*/

//==========================================================

//const x = 0
//y = "morango"
//console.log(x, y)

//==========================================================

const input = require("readline-sync");

console.log("== Olá! Qual o mês que você quer saber. ==")
const mes = input.question("Digite o mes: ")

if (mes === "fevereiro") {
    console.log("tem carnaval")
} else if (mes === "junho") {
    console.log("tem são joão")
} else if (mes === "dezembro") {
    console.log("tem natal")
} else {
    console.log(`${mes} não é um mês festivo.`)
}

