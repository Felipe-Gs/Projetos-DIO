// const saudacao = (nome) => alert(`olá + ${nome}`);
// const precessaEntradaUsuario = (callback) => {
//     const nome = prompt("Digite seu nome:");
//     callback(nome);
// }

// precessaEntradaUsuario(saudacao);

//outras formas de callback
const somar = (x, y) => x + y;
const calcular = (x, y, computar) => computar(x, y);
const resultado = calcular(20, 30, somar);

console.log(resultado);