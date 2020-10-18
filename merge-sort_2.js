// Recebe dois vetores JÁ ORDENAMOS PREVIAMENTE e os mescla
// em um único vetor, também ORDENADO
function mesclarVetores(vetEsq, vetDir) {
    let vetRes = [], posEsq = 0, posDir = 0, sobra

    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        if(fnComp(vetDir[posDir] < vetEsq[posEsq]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else { // vetDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    // slice(): retorna um subvetor a partir da posição especificada até o fim

    //Sobra no vetor da esquerda
    if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
    //Sobra no vetor da direita
    else sobra = vetDir.slice(posDir)

    //console.log({posEsq, posDir, sobra})

    // A sobra é acrescentada ao resultado final. 
    return vetRes.concat(sobra)
}

//fnComp -> função de comparação
//Parâmetros: dois valores a serem comparados
//Retorno:
// - true: se o primeiro valor for maior que o segundo
// - false: caso contrário
function mergeSort(vetor, fnComp) {
    if(vetor.length > 1) {    
         // Encontra o meio do vetor
       let meio = Math.floor(vetor.length / 2)
       let vetEsq = vetor.slice(0, meio) // A posição do meio não entra
       let vetDir = vetor.slice(meio)
       vetEsq = mergeSort(vetEsq)
       vetDir = mergeSort(vetDir)
       return mesclarVetores(vetEsq, vetDir)
    }
    return vetor
}

console.log(mergeSort([33, 98, 77, 49, 2, 26, 93, 51, 14, 64]))

// Resultado esperado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(mesclarVetores([0, 4, 7, 8, 9], [1, 2, 3, 5, 6]))

