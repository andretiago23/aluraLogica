const arrNumeros = [1, 2, 3, 4, 5, 6];

//ADICIONA UM ITEM NO FINAL DA LISTA
arrNumeros.push(1);
console.log(arrNumeros);

//RETIRA O ULTMO ITEM
arrNumeros.pop()
console.log(arrNumeros)

//RETORNA O LUGAR QUE O NÚMERO TAVA 
const elem = arrNumeros.indexOf(5);
console.log(elem);

//SELECIONAA TODO O ARRAY QUE ESTA PISICIONADO DEPOIS DO ITEM QUE VOCÊ ESCOLHEU
const novoArr = arrNumeros.slice(2);
console.log(novoArr);

//MÉTODO MAP 
const arrCalculado = arrNumeros.map((num) => {
    return num * 10;
})
console.log(arrCalculado);

//METODO FOREACH
arrNumeros.forEach((num, i) => {
    console.log('O número ' + num + ' está no item ' + i);
})

//MÉTODO FILTER
const arrFiltrado = arrNumeros.filter(num => num % 2 === 0);
console.log(arrFiltrado);

//CLONAGEM DE ARRAY 
const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;
}
const arr2 = copiaArray(arr1)
arr1[0][0] = 5;
console.log(arr1)
console.log(arr2)

//EXERCICIO:
const cpfs = [111111111111, 22222222222, '33333333333333', '4444444444444', '555555555555']
console.log('cpfs dos clientes: ' + cpfs)
const result = cpfs.map(cpf => {
    if (typeof cpf === 'string') {
        return cpf;
    } else {
        return cpf.toString()
    }

})
console.log(result)