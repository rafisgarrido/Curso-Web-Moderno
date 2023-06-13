const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //charAt para encontrar letra
console.log(escola.charCodeAt(3)); //charCodeAT código relacionado a tabela padrão unicode
console.log(escola.indexOf('3')); //indexOf em qual índice está o parâmetro citado na constante aplicada

console.log(escola.substring(1)); //A partir do índice 1 até o final o substring irá mostrar a string
console.log(escola.substring(0, 3)); //Iniciará em 0 até o índice 3, mas sem apresentar o índice 3

console.log('Escola '.concat(escola).concat("!"))//Para concatenar, mostrar uma ou mais strings
console.log(escola.replace(3,'e')) //Replace - sunbstitui o indice citado pelo valor mencionado

console.log('Ana, Maria, Pedro'.split(',')); //Split transforma as strings em arrays, é necessário citar o que será aplicado como separador, nesse caso a vírgula