const participantes = [
    { nome: 'ana', idade: 17, },
    { nome: 'pedro', idade: 19, },
    { nome: 'Paulo', idade: 16, },
    { nome: 'Larissa', idade: 35, }
];

function filtrarIdade(part) {
    const maiores = part.filter(p => p.idade > 18)

    maiores.forEach(p => {
        console.log('acesso liberado para: ' + p.nome)
    })

    const novaLista = maiores.map(p => p.nome);
    console.log('--LISTA DE MAIORES--')
    console.log(novaLista)

}

filtrarIdade(participantes)
