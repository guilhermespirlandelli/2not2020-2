//Propiedades comutativa

//Valores numéricos
let x = 5
let y = 11
console.log(x > y)
console.log(y > x)

console.log('-----------------------')

//Valores string
let a = "Abel"
let b = 'Bartira'
console.log(a > b)
console.log(b > a)

console.log('-----------------------')

//Valores do tipo objeto

let p1 = {
    nome: "Abel",
    sexo: "M",
    idade: 38  
}

let p2 = {
    nome: "Bartira",
    sexo: "F",
    idade:29
}

// NÃO FAZ comparação de objeto inteiro.
console.log(p1 > p2)
console.log(p2 > p1)

console.log('-----------------------')


// Compara valores de dentro do objeto.
console.log(p1.idade > p2.idade)
console.log(p2.idade > p1.idade)

//A propriedade de comparação do JS não funciona para objetos, 
//Apenas funciona para, Number, String e Booleans