console.log(Math.ceil(6.1)); //Math.ceil operação de arredondamento

const obj1 = {};
obj1.nome = 'Bola';
//obj1['nome'] = 'Bola2'
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome //this relaciona o nome asociado ao objeto
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();