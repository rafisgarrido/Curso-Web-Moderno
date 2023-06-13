function Pessoa() {
    this.idade = 0

    const self = this 
    setInterval(function(){ // dispara outra função de acordo com o intervalo que vc passar
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //milisegundos
}
  new Pessoa