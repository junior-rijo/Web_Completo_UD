const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa Devs'
    return saudacao
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Junior",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua tal',
        numero: 122
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
