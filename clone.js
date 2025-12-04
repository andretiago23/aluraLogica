const dinossauros = ['Trisseratox', 'Bubassaur', 'Tiranossauro Rex']
let dinossauro2 = []
let nomes

function repetirDIno(dinossauros) {
    dinossauros.forEach((nome) => {
        dinossauro2.push(nome)
    })
    dinossauro2.push('Chalizzard')
}
repetirDIno(dinossauros)
console.log(dinossauros)
console.log(dinossauro2)
