const Stack = require('./lib/Stack')

let pilha = new Stack()

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length; i++) {
    //Inserção na pilha deve ser feita no final
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let inverso = ''
while(pilha.size() > 0) {
    //Retiradas na pilha devem ser feitas tbm no final
    inverso += pilha.pop()
}

console.log(pilha)
console.log(inverso)

/*
console.log(pilha)

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(7)

console.log(pilha)
console.log('Último elemento: ', pilha.peck())
console.log('Tamanho ', pilha.size())

let x = pilha.pop()
console.log('x: ', x)
console.log('Último elemento: ', pilha.peck())
console.log('Tamanho ', pilha.size())
*/

