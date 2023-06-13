//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);

}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6);
imprimirSoma();

//Funcao com retorno
function soma(a, b = 0){
    return a + b   //Retorna a soma
}

console.log(soma(2,3));
console.log(soma(2));