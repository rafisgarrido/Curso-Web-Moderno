const prod1 = {};// Objeto é uma coleção de chave e valor, você tem o nome/atributo/identificador e vc passa um avlor para ele podendo ser string, boolena, número.
prod1.preco = 4998.90
prod1.nome = 'Celular Ultra Mega';
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1); //sempre apresentará um conjunto de chave e valor

const prod2 = {
    nome: 'Camisa Polo', //Para adicionar mais valores ao objeto separamos com vírgula
    preco: 79.90
}

console.log(prod2);