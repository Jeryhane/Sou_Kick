const prompt = require('prompt-sync')({sigint:true});
var numero = prompt("Insira um número para gerar sua tabuada: ");
for (let i = 0; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (i*numero));
    
}