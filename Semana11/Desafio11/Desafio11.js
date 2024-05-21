const prompt = require('prompt-sync')({sigint:true});

var ranking = [['maria', 10], ['joão', 8], ['kauan', 6]]

function VerificaJogadorExistente(jogador, pontuacao) {
    var existe = false;
    for (var i = 0; i < ranking.length; i++) {
        if (ranking[i][0] === jogador) {
            existe = true;
            if (ranking[i][1] <= pontuacao) {
                ranking[i][1]=pontuacao;
                break;
            }
        }
    }
    if (!existe) {
        ranking.push([jogador.toLowerCase(), pontuacao])
    }
}
function ValidarResposta(resposta){
    return resposta.toLowerCase().trim()
}
function RespostaVerdadeiro(resposta) {
    if (resposta === "verdadeiro") {
        console.log("Correto!");
        pontuacao++;
    } else {
        console.log("Resposta incorreta. A afirmação é verdadeira! ☺");
    }
}
function RespostaFalso(resposta, mensagem) {
    if (resposta === "falso") {
        console.log("Correto!");
        pontuacao++;
    } else {
        console.log(mensagem);
    }
}


let jogador
let op = 10;
let pontuacao = 0;
let resposta;

while (op != 0) {
    op = parseInt(prompt("O que deseja fazer?  1 - Jogar  2 - Ver Ranking 0 - Sair"));

    switch (op) {
        case 1:
            pontuacao = 0
            jogador = prompt("Qual o seu nome? ");

            resposta = prompt("JavaScript foi criado em 1995 por Brendan Eich. Verdadeiro ou falso?");
            RespostaVerdadeiro(ValidarResposta(resposta))

            resposta = prompt("Em JavaScript, null e undefined são estritamente iguais. Verdadeiro ou falso? ");
            RespostaFalso(ValidarResposta(resposta), "Resposta incorreta. Eles são iguais com == mas não estritamente iguais com ===");
            
            resposta = prompt("O método Array.prototype.push() adiciona um ou mais elementos ao final de um array. Verdadeiro ou falso? ");
            RespostaVerdadeiro(ValidarResposta(resposta))

            resposta = prompt("JavaScript suporta sobrecarga de métodos como em Java e C#. Verdadeiro ou falso? ");
            RespostaFalso(ValidarResposta(resposta), "Resposta incorreta. JavaScript não suporta sobrecarga de métodos nativamente!");
            
            resposta = prompt("Em JavaScript, let e const têm escopo de bloco. Verdadeiro ou falso? ");
            RespostaVerdadeiro(ValidarResposta(resposta))

            resposta = prompt("O operador === compara tanto o valor quanto o tipo dos operandos. Verdadeiro ou falso? ");
            RespostaVerdadeiro(ValidarResposta(resposta))

            resposta = prompt("NaN significa Not-a-Number e NaN === NaN retorna verdadeiro. Verdadeiro ou falso? ");
            RespostaFalso(ValidarResposta(resposta), "Resposta incorreta. NaN === NaN retorna falso!");
            
            resposta = prompt("As funções em JavaScript são objetos de primeira classe. Verdadeiro ou falso? ");
            RespostaVerdadeiro(ValidarResposta(resposta))

            resposta = prompt("O método Array.prototype.map() modifica o array original. Verdadeiro ou falso? ");
            RespostaFalso(ValidarResposta(resposta), "Resposta incorreta. map() retorna um novo array e não modifica o original");
            
            resposta = prompt("JavaScript é uma linguagem fortemente tipada. Verdadeiro ou falso? ");
            RespostaFalso(ValidarResposta(resposta), "Resposta incorreta. JavaScript é uma linguagem fracamente tipada");
            
            jogador = ValidarResposta(jogador)
            VerificaJogadorExistente(jogador, pontuacao)
            
            console.log("PONTUAÇÃO " + jogador + ": " + pontuacao)
            break;
        case 2:
            ranking.sort(function (a, b) {
                return b[1] - a[1];
              });
            console.log("PONTUAÇÃO");
            console.table(ranking)
            break;
        case 0:
            console.log("Você saiu!");
            break;

        default:
            console.log("Digite uma opção válida!");
            break;
    }
}
let final = "!"
if (jogador != null && jogador != undefined && jogador != "") {
    final = ", " + jogador + "!"
}
console.log("Obrigada por jogar" + final + " ☻");