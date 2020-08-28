let vetor1 = [] // Forma moderna
let vetor2 = Array() // Forma antiga 

//criação de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

//inserção de novos vetores

//forma 1: push() -> Adiciona elementos na fim do vetor
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

//forma 2: unshift() Adiciona elementos na início do vetor
vetor1.unshift('abacaxi')
console.log(vetor1)

vetor1.unshift('maçã')
console.log(vetor1)

//forma 3: splice() primeiro indica posição, segundo indica quantos apagar, terceiro oque acrescentar
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)


//Remoção de elementos do vetor

// Forma 1: pop() -> Retira o último elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

// Forma 2: shift() -> Retira o primeiro elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

//Métodos de percurso de vetores

//Forma 1: Usando for tradicional
//Início da variável na posição 0 e seu incremento deve ir uma posição antes do número de elementos (length)
for(let i = 0; i < vetor1.length; i++) {
        console.log(vetor1[i])
}

//Forma 2: for..of
for(let fruta of vetor1) {
    console.log(fruta)
}


