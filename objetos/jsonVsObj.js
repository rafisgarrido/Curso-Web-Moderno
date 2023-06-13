const obj = {a:1, b:2, c:3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))// transforma em JSON

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c' : 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c" : 3 }')) //objeto gerado a partir de um texto
console.log(JSON.parse('{ "a": 1, "b": "string", "c" : true }')) //o texto tem que ser delimitado por aspas duplas