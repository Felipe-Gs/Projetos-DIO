function somarNumeros(arr){
    return arr.reduce(function(prev, current){
        
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [2, 4, 4, 5];

console.log(somarNumeros(arr));