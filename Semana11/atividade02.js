const prompt = require('prompt-sync')({sigint:true});
var numero = 0
numero = prompt("Insira um número para encontrar seus antecessores impares: ");
for (let i = 0; i <= numero; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}