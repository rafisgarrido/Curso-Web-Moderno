//PROGRAMA DE TRATATIVA GERAL PARA JAVASCRIPT

function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
        }
}

function imprimirNomeGritado(obj) {
    try{ //bloco que pode potencialmente gerar um erro
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){ //Bloco para tratativa de erro
        tratarErroELancar(e)
    } finally { //Sempre é executado se o try der certo ou passar pelo catch
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)