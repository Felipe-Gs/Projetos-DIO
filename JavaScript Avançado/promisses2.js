const promise1 = new Promise((resolve, rejected) => {
   setTimeout(() =>resolve("promisse 1 resolvida!"), 1000 )  
});

const promise2 = new Promise((resolve, rejected) => {
   setTimeout(() => resolve("promisse 2 resolvida!"), 500) 
});

const promise3 = new Promise((resolve, rejected) => {
    setTimeout(() =>  resolve("promisse 3 resolvida!"), 100)
});

Promise.all([ promise1, promise2, promise3 ]).then((messages) =>{
    console.log(messages)
})//verifica todas as promisses...
//then so é chamado se resolver todas as promissessetTimeout(() => ) 
Promise.race([ promise1, promise2, promise3 ]).then((message) =>{
    console.log(message)
})
//race: quem chega primeiro ganha prioridade!