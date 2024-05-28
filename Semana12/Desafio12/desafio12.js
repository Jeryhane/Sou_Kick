/*Crie uma função contendo uma lista com 10 nomes, a cada execução da função um nome aleatório deve ser retornado. 

Utilize: função ,return e array*/
const prompt = require('prompt-sync')({sigint:true});

principal()
function principal(){
    var nomes = ['Maria', 'José', 'Fernanda', 'João', 'Cristina', 'Lucas', 'Vanessa', 'Isaque', 'Fátima', 'Caio', 'Thompson'];
    return nomes[Math.floor(Math.random() * nomes.length)];
}