const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua dos bobos',
        numero: 1000
    }
}

const {nome, idade} = pessoa //operador destructuring: tire de bdentro do objeto pessoa o atributo nome e idade
console.log(nome,idade);

const{nome: n, idade: i} = pessoa
console.log(n, i);

