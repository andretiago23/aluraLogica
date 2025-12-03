// const despesas = [1200, 10, 2000, 800]; //lista


// despesas.map((numeroLimite, i) => { })

let total = 0 //total da somatoria

//função que guarda o 'for'
function somaArray(numeros) {
    //ler o proximo item
    for (let i = 0; i < numeros.length; i++) {     //enquanto o item percorrido for menor que o tamanho da lista 
        let despesaAtual = numeros[i]   //cria uma variavel para o item que está sendo lido

        total = despesaAtual + total

    }

    console.log(`O total é ${total}`)//esse aqui manda exibir a mensagem na tela 
}
//aqui ele chama  a função qu foi mencionada lá em cima
somaArray([1200, 10, 2000, 50, 23, 120, 123])
