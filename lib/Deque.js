/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite inserções e remoções em qualquer um de seus lados)
*/

module.exports = class Deque {
    constructor() {
        this.data = []
    }

    // Inserção no início
    insertFront(value) {
        this.data.unshift(value)
    }

    // Inserção no final
    insertRear(value) {
        this.data.push(value)
    } 

    //Remoção no início
    removeFront() {
        return this.data.shift()
    }

    //Remoção do Final
    removeRear() {
        return this.data.pop()
    }

    // Olhadinha no início
    peekFront() {
        return this.data[0]
    }

    // Olhadinha no final
    peekRear() {
        return this.data[this.data.length -1]
    }

    size() {
        return this.data.length
    }

}
