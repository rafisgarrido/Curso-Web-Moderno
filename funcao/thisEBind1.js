const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) //o bind vc passa um objeto que vc quer ser resolvido o this, nesse caso pessoa
falarDePessoa()// métdoo responsável por amarrar, dono da execução

