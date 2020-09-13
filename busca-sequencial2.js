function buscaSequencial(lista, valorBusca, fnComp) {
    for(let i = 0; i < lista.length; i++) {
        //Encontrou  o que está buscando e retorna a posição em que foi encontrado
        //if(lista[i] === valorBusca) return i
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1 // valorBusca não foi encontrado na lista
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome) {
    //Retorna true se o atributo first_name do obj for igual o nome
    return obj.first_name === nome
}

console.time('GUILHERME')
//console.log(buscaSequencial(listaNomes, 'GUILHERME', comparaNome))
console.log(buscaSequencial(listaNomes, 'GUILHERME', (obj, nome) => obj.first_name === nome))
console.timeEnd('GUILHERME')


console.log('-------------------------------------------------------------------')

console.time('FREQUENCIA')
//Encontrar o primeiro nome da lista que possui mais de 10000
let pos = buscaSequencial(listaNomes, 10000, (obj, valor) => obj.frequency_total > valor)
//Exibe o objeto na posição encontrada e depois a própria posição
console.log(listaNomes[pos], pos)
console.timeEnd('FREQUENCIA')