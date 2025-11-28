let numeroSecreto = geraNumeroAleatorio();

function exibiTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
}

exibiTextoNaTela('h1', ' jogo do número secreto ')
exibiTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log('o botao foi clicado!');
}

function geraNumeroAleatorio() {
    return parseInt(Math.random() * x + 1);

}
