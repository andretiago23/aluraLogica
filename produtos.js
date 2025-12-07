const produtos = [ { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];
console.log('Relatoro de produtos vendidos:')
console.log(produtos)


function filtrarProdutos(prod){
const maisVendidos = prod.filter( p=>p.quantidadeVendida > 100)

maisVendidos.forEach(p =>
    console.log('Produtos com alto indice de vendas: ' + p.nome)
)

for (let i = 0; i<produtos.length; i++){
    let p= prod[i]
let renda = p.preco * p.quantidadeVendida
console.log('Total de venda de cada um: ' + p.nome +renda ) 
}
for (let i = 0; i<produtos.length; i++){
    if (renda > prod)
        console.log('O produto mais lucrativo foi:' + )
}

}
filtrarProdutos(produtos)



