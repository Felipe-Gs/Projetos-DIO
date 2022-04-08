//aprendendo mais sobre funções


//normal
var sum = function(a, b){
    return a + b;
}

console.log(sum(5, 5));

//aroow functions

var sum =(a, b) => a+b
console.log(sum(6, 10));

var createObj = () => ({test:123});
console.log(createObj());

var felipe = () => {
    console.log('felipe gomes da silva')
}
felipe()
