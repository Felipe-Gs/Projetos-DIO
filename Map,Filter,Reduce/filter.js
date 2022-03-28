function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
//retorna só os pares
}

const meuArray = [1, 23, 56 , 75, 23, 21, 98, 9, 2];


console.log(filtraPares(meuArray));