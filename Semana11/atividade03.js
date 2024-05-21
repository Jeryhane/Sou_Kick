const prompt = require('prompt-sync')()

let senha = "12345"
let senhaInserida

do {
    senhaInserida = prompt("Insira sua senha: ")
    if (senha == senhaInserida) {
        console.log("Seja Bem-vindo!")
    }
} while (senha != senhaInserida);