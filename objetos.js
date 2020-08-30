//Declaração de um Objeto

let pessoa1 = {}                //Forma "moderna"
let pessoa2 = new Object()      //Forma "tradicional"

//Inicialização de obejetos já com propriedades e valores.

let pessoa3 = {
    nome: 'Filanison de Souza',
    "data de nascimento": '1998-05-10',
    sexo: 'M',
    profissao: 'marceneiro'

}

//Exibir o valor de um atributo (nome do atributo SEM espaços)
console.log(pessoa3.nome)       //Sintaxe do ponto

//Exibir o valor de um atributo (bome com espaços)
console.log(pessoa3["data de nascimento"])  //Sintaxe dos colchetes

//A sintaxe dos colchetes funciona sempre, mesmo quando o nome não tem espeços.
console.log(pessoa3["profissao"])

//Criando uma nova propriedade em um objetos.
pessoa1.nome = "Sicranilson Soares"
pessoa1["data de nascimento"] = '1988-07-31'
console.log(pessoa1)

//A criação de novas propriedades podem ser feitas em cima de de objetos já com propriedades.
pessoa3.altura = 1.73
pessoa3.peso = 87
console.log(pessoa3)

// Exclusão de propriedade
delete pessoa3.sexo
console.log(pessoa3)

// Listando os atributos (nomes de propriedades) de um objeto: for..in
for(let atributo in pessoa3) {
    console.log(atributo)
}

console.log('----------------------------------------------------------------')

//Listar as propriedades (atributo + valor) de um objeto
for(let atributo in pessoa3) {
    console.log('Atributo: ' + atributo + '; valor: ' + pessoa3[atributo])
}