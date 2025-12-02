let listaDeNumerosSorteados = []
let numeroLimite = 10;
let contagem = 1
let chute
let numeroSecreto = gerarNumeroAleatorio();
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');

function exibirTextoNaTela(tag, texto) {
    let Campo = document.querySelector(tag)
    Campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        { rate: 1.2 })
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()
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
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let elementosNaLista = listaDeNumerosSorteados.length;
    if (elementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;

    }
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

