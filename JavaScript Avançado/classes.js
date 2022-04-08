class Carro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
}


const Carro1 = new Carro("Audi", 2020);
const carro2  = new Carro("Ferrari", 2010);

console.log(Carro1, carro2);

//herança

class Dev {
    constructor(nome, idade, principalLinguagem){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
    }

    saudacao(){
        console.log(`oi! sou dev FrontEnd, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}\n\n `)
    }
}

const dev = new Dev("Felipe", 19, "JavaScript");

console.log(dev);
dev.saudacao();