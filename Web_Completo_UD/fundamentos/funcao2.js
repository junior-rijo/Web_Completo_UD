// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {//funçã anonima
    console.log(a+b)
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
//=> substitui o nome function
const soma = ( a, b) => {
    return a + b
}
console.log(soma(2,10))

//retorno implicito 
const subtracao = (a, b) => a- b 
console.log(subtracao(5, 4))
