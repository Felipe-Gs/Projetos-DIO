const animal ={
    som: 'um som de animal',
    tipo:'animal',
    emitirSom: function(){
        console.log(this.som)
    }
}

const gato ={
    som:'miau',
    tipo:'gato'
}

Object.setPrototypeOf(gato, animal)//puxa a função
// na classe animal e traz para o obejto gato

gato.emitirSom()

const gatoRaivoso = {
    tipo: 'gatoRaivoso',
    miarForte: function(){
        console.log(this.som.toUpperCase())
    }
}
Object.setPrototypeOf(gatoRaivoso, gato)

gatoRaivoso.miarForte()

const dev = {
    nome: 'felipe',
    idade: 19,
    funcao: 'FrontEnd',
    funcaoDoDev: function(){
        console.log(`bom dia dev ${this.nome}, sua funcao é: ${this.funcao}`);
    }
}

const dev2 = {
    nome: 'gomes',
    idade:20,
    funcao: 'backend',
}

Object.setPrototypeOf(dev2, dev)
//pega a funcao que foi escrita na dev e usa na dev2, mesmo nao tento na classe dev2
//é como se fosse herança , mas é Prototypes

dev2.funcaoDoDev()
dev.funcaoDoDev()