/*
v e v -> v
v e f -> f
f e / -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f // xor é o ou excluysivo, onde obrigatoriamente os dois termos devem ser diferentes
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f
!f -> v 
*/
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // || símbolo do OU/OR
    const comprarTv50 = trabalho1 && trabalho2 // && símbolo E/AND
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // ^símbolo do OU exclusivo/XOR   
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unitário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))