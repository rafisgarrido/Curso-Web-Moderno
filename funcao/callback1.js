const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`)
}
fabricantes.forEach(imprimir) //para cada elemnto a função será chamada novamente
fabricantes.forEach(function(a) {
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))