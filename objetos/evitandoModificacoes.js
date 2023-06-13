//Object.preventExtensions
const produto = Object.preventExtensions ({ //com o Object.preventExtensions não conseguimos adicionar mais nada, apenas excluir
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag 
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35} 
Object.seal(pessoa) //OBJECT.SEAL SERVE PARA SELAR O OBJEO, OU SEJA, VC NÃO CONSEGUE ADD NOVOS ATRIBUTOS, EXCLUIR ATRIBUTOS, MAS CONSEGUE MODIFICAR OS VALORES
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

//Object.freeze = selado + vavlores constantes -- vc não consegue incluir, excluir e nem modificar o objeto
