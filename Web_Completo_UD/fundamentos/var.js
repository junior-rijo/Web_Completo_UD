//evitar usar var no escopo global
// Ou se cria var global visivel para todos
//OU dentro de uma function

//ex:

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// let escopo global, escopo de função e escopo de bloco  e var tem escopo global e função

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
