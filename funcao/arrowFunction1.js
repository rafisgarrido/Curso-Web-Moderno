let dobr = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a // quando a função for de bloco é necessário o return
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'