//Pré-requisito para a busca binária: o conjunto de dados PRECISA estar ordenado
//pelo critério de busca
let comp = 0

// Implementação recursiva
// Uma função chama a si mesma com pelo menos um valor alterado.
// Toda função recursiva precisa ter pelo menos uma condição de saída.

// Os parêmetros inicio e fim são OPCIONAIS. caso a função seja chamada sem especificá-los,
// eles assumirão o valor indicado.
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {

    if(fim >= inicio) {
        //Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca.
        if (res == 0) {
            comp++
            return meio //condição de saída
        }
        else if (res < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio -1)
        }
        else { // res > 0
            comp += 2
            //inicio = meio + 1
            return buscaBinaria(lista, valorBusca, fnComp, meio +1, fim)
        }
    }
    //condição de saída
    return -1 //Valor não encontrado

}

function comparaNome(obj, valorBusca) {
    //Os dois valores são iguais.
    if(valorBusca === obj.first_name) return 0
    // Um número negativo para indicar que primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    // Um número positivo para indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.first_name
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if(busca === elPos) return 0
    else if(busca < elPos) return -1
    else return 1
}))

// Termina a execução sem passar pelas linhas abaixo
//process.exit(0) // 0 = saindo ok, sem erros

let listaNomes = require('./dados/lista-nomes')

console.time('GUILHERME')
console.log(buscaBinaria(listaNomes, 'GUILHERME', comparaNome))
console.timeEnd('GUILHERME')
console.log('Comparações: ', comp)

console.log('---------------------------------')
comp = 0

//Arrow Function

console.time('JESSICA')
console.log(buscaBinaria(listaNomes, 'JESSICA', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('JESSICA')
console.log('Comparações: ', comp)