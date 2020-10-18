function quickSort(vetor, inicio = 0, fim = vetor.length - 1) {
    //console.log({ vetor, inicio, fim })
    if (fim > inicio) { // Garante que haja, PELO MENOS, DOIS elementos para ordenar    
        let posDiv = inicio - 1
        let posPivot = fim
        for (let i = inicio; i < fim; i++) {
            if (vetor[i] < vetor[posPivot]) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        console.log({ posDiv })

        quickSort(vetor, inicio, posDiv - 1) // Lado esquerdo
        quickSort(vetor, posDiv + 1, fim)    // Lado direito
    }
}

/*
let nums = [54, 81, 72, 36, 9, 90, 27, 45, 18, 63]

quickSort(nums)
console.log(nums)
*/

const nomes = require('./dados/100-mil-nomes (1)')
console.time('Teste nomes')
quickSort(nomes)
console.time('Teste nomes')
console.log(nomes)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)