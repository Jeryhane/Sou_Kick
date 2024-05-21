const prompt = require('prompt-sync')({sigint:true});
var numero = 0
var soma = 0
for (let i = 1; i <= 5; i++) {
    numero = prompt("\nInsira um número para realizar a média: ");
    soma = soma + parseFloat(numero)
    if (i == 5) {
        console.log(soma)
        console.log(soma / 5);
    }
}