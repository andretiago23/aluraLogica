
let contagem = 1
let chute
let numeroSecreto = gerarNumeroAleatorio();
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');

// console.log("paragrafo", paragrafo)
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
// exibirMensagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto com ' + contagem + ' tentativas');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute);
        }
        contagem++
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    contagem = 1;
    exibirMensagemInicial();
}

