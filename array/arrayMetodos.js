const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona no último elemnto do array
console.log(pilotos)

pilotos.shift()//remove o primeiro elemenbto do array
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona no primeiro elemento do array
console.log(pilotos)

//splice pode adiconar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')//os indices e os strings a serem adicionados
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array, o 2 representa a partir de qual indice deve mostrar o novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//intervalo do 1 ao 4, onde o 4 não entra S
console.log(algunsPilotos2)