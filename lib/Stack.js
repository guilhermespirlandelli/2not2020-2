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
peck() {
        return this.data[this.data.length - 1]
    }

//Retornar o número de elementos na pilha
size() {
        return this.data.length
    }    
}