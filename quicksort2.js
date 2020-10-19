/*
    //fnComp -> função de comparação
    //Parâmetros: dois valores a serem comparados
    //Retorno:
    // - true: se o primeiro valor for maior que o segundo
    // - false: caso contrário
*/

function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1) {
    //console.log({ vetor, inicio, fim })
    if (fim > inicio) { // Garante que haja, PELO MENOS, DOIS elementos para ordenar    
        let posDiv = inicio - 1
        let posPivot = fim
        for (let i = inicio; i < fim; i++) {
            //if (vetor[i] < vetor[posPivot]) {
              if(fnComp(vetor[posPivot], vetor[i])) {  // Parâmetros invertidos
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        console.log({ posDiv })

        quickSort(vetor, fnComp, inicio, posDiv - 1) // Lado esquerdo
        quickSort(vetor, fnComp, posDiv + 1, fim)    // Lado direito
    }
}

/*
let nums = [54, 81, 72, 36, 9, 90, 27, 45, 18, 63]

quickSort(nums)
console.log(nums)
*/

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
//quickSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
quickSort(candidatos, (a, b) => {

    if(a.NR_CANDIDATO == b.NR_CANDIDATO) {
        if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    }
    else if(a.NR_CANDIDATO > b. NR_CANDIDATO) return true
    else return false
})

console.time('Teste candidatos')
console.log(candidatos)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)