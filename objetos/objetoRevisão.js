//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua bababa',
            numero: 123,
        },
        condutores: [{
            nome:'Rafa',
            idade: 23
        }, {
            nome:'Ana',
            idade: 24
        }]

    }
}
carro.proprietario.endereco.numero = 1000
carro ['proprietario']['endereco']['logradouro']
console.log(carro)