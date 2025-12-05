
let arrValores = [125, 684, 346, 222];

function calcularDesconto(arr) {
    return arr.map((valores) => {
        desconto = valores * 10 / 100;
        return valores - desconto;
    })
}
const valorComDesconto = calcularDesconto(arrValores)
console.log('valores com desconto: ' + valorComDesconto) 