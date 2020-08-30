//CARACTERISTICAS da função abaixo.
// - Tem apenas um parâmetro (argumento), 
// - Possui uma linha de código como return.
let quadrado = function(x) {
    return x * x
}


// Arrow-Function sintaxe simplificada.

let quadrado2 = x => x * x

console.log(quadrado(7))
console.log('-----------------------------')
console.log(quadrado2(7))

//-------------------------------------------

let potencia = function (base, exp) {
    return base ** exp
}

// Arrow-Function sintaxe simplificada.

let potencia2 = (base, exp) => base ** exp

console.log(potencia(2, 5))
console.log('-----------------------------')
console.log(potencia2(2, 5))
