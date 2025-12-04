const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço'

function procurarLivros(batata) {


    const temContico = batata.includes("O Cortiço")


    console.log("temContico", temContico)

}


procurarLivros(livros)