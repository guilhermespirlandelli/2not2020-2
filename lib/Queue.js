/*
    Estrutura de dados de Fila
    Fincionamento: FIFO (first in, First out)
    (primeiro que entra é o primeiro que sai)
*/

module.exports = class Queue {
    constructor() {
        this.data = [] // Armazenamento
    }

    // Inserção
    enqueue(value) {
        this.data.push(value)
    }

    // Remoção
    dequeue() {
        return this.data.shift()
    }

    // Olhadinha (no início da fila)
    peek() {
        return this.data[0]
    }

    // Tamanho da fila
    size() {
        return this.data.length
    }
}