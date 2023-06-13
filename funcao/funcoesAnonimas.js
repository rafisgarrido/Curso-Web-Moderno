const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado (3, 4) // a função soma não é especificada
imprimirResultado (3, 4, soma)
imprimirResultado (3, 4, function (x, y){
    return x - y
})
imprimirResultado (3, 4, (x, y) => x * y) //quando temos um arrow sempre temos uma função anônima

const pessoa = {//funções dentro de objeto tbm são anônimas
    falar: function (){
        console.log('Opa')
    }
}
pessoa.falar()