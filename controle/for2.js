const notas = [6.7, 8.1, 6.5, 7.7, 9.1]

for (let i in notas){ // for in serve para percorrer as estruturas do array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 32,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

