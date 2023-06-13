const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // chaves
console.log(Object.values(pessoa)) // valores
console.log(Object.entries(pessoa)) // valor de entrada e valor das chaves

Object.entries(pessoa).forEach(([chave, valor]) => { // desestruturando os elementos do array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, // writable: false significa que não pode ser alterada
    value: '01/01/2023'
})

pessoa.dataNascimento = '01/01/2022'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // assign concatena os objetos em um só

Object.freeze(obj)
obj.c = 1234
console.log(obj)