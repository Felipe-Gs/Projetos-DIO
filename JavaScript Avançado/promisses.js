const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 3
    if(soma === 2){
        resolve('Tudo certo!')
    }else{
        reject('Deu ruim!')
    }
})

console.log('esperando promise...')

umaPromessa.then((resultado) => {//caso for aceito vai entrar nessa funcao
    console.log(`valor do then: ${resultado}`)
}).catch((erro) =>{//caso nao for aceito ele entra nessa função em baixo
    console.error(`valor do catch: ${erro}`)
}).finally(() => {
    console.log(`independente do resultado eu sempre estarei aqui.`)
})