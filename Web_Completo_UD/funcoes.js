//Função em JS é FIrst-Class Object (Diretrizes)
//Higher-order function

//criar de forma literal
function fun1() {

}

//Armazenar em uma variável 
const fun2 = function () {

}
//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))