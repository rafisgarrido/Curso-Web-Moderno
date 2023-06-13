const sequencia = {
    _valor: 1, // underline é uma convenção para variável que será acessada apenas internamente
    get valor() {return this._valor++ }, // get e set são feitos para acessar os tributos de uma forma mais controlada
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)