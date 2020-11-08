/*
    Estrutura de dados Pilha
    Funcionamento: LIFO = Last in, First out
    (O ùltimo que entra é o primeiro que sai)
*/

module.exports = class Stack {

    constructor() {
        this.data = [] // Armazenamento
    }

//Inserção
push(value) {
    this.data.push(value)
    } 

//Remoção
pop() {
    return this.data.pop()
    }

//Verificação no topo da pilha ('olhadinha')
peek() {
        return this.data[this.data.length - 1]
    }

//Retornar o número de elementos na pilha
size() {
        return this.data.length
    }    
}