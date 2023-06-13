function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min// math.random gera um valor entre 0  e 1
    return Math.floor(valor) //Math.floor arredonda
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != -1) //unica estrutura que a expressão vem depois do bloco

console.log('Até a próxima!')
