// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10",/*2*/
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];/*1*/

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.getElementById('lista-desenhos');/*3*/
    lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement("li");/*4*/
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
    const novoDesenho = document.getElementById('novo-desenho').value;/*5*/
    if (novoDesenho.trim() !== '') {
        desenhosAnimados[indiceSubstituicao] = novoDesenho; // Substitui o elemento no índice atual
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
        exibirLista();/*6*/ // Atualiza a exibição da lista
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    }
}

// Exibe a lista inicial quando a página carrega

window.onload = exibirLista();