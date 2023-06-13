var numero = 1
{
    let numero = 2 //let é visível apenas dentro do bloco
    console.log('dentro =', numero)
}
console.log('fora =', numero);

//Variáveis definidas reservadas com a palvra var possuem escopo global e de funcao
//Variáveis definidas reservadas com a palvra let possuem escopo global, de funcao e de bloco