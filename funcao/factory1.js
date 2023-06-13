//factory é função que retorna objeto
const prod1 = {
    nome: '...',
    preco: 45
}

function criarPessoa() { //factory cria novos objetos por meio da chamada da função
    return {
        nome:'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())