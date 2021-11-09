const input = require("readline-sync");

console.log("== Olá! Sejam bem Vindos. ==")
const idade = input.question("Qual sua idade")

if (idade >= 18 && idade < 21) {
    console.log("Ok! Você pode entrar, mas não pode beber!")
} else if (idade >= 21) {
    console.log("Você pode entrar e beber, com moderação!")
} else {
    console.log("Desculpe! Você não tem idade para entrar.")
};
