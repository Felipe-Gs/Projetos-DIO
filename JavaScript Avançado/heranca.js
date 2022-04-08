class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev){
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDeDev = tipoDeDev;
    }

    saudacao(){
        console.log(`oi! sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome}\n\n `)
    }
}

class FrontendDev extends Dev{
    constructor(nome, idade, principalLinguagem,tipoDeDev, framework){
        super(nome, idade, principalLinguagem, tipoDeDev);
        // this.nome = nome;
        // this.idade = idade;
        // this.principalLinguagem = principalLinguagem;
        //NÃO É OBRIGADO A PASSAR POIS JA ESTÁ INSTACIADO NA CLASSE PAI.
        this.framework = framework;
    }  
}


class BackendDev extends Dev {
    constructor(nome, idade, principalLinguagem,tipoDeDev,  bancoDeDados){
        super(nome, idade, principalLinguagem, tipoDeDev);//obrigatorio ter o super para chamar a classe pai
        // this.nome = nome;
        // this.idade = idade;
        // this.principalLinguagem = principalLinguagem;
        //NAO É OBRIGADO A PASSAR POIS JA ESTA NA CLASSE PAI
        this.bancoDeDados = bancoDeDados
    }
}


const FrontEnd1 = new FrontendDev("felipe", 19, "javascript","FrontEnd" ,"React");
const BackEnd1 = new BackendDev("joao", 26, "C#", "backend", "SQL server");


console.log(FrontEnd1);
FrontEnd1.saudacao()

console.log(BackEnd1);
BackEnd1.saudacao();