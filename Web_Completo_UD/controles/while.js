//utlizado para uma quantidade indeterminada
//Focado em repetições
function getInteiroAlcotoricEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAlcotoricEntre(-1, 10)
    console.log(`opçao escolhida foi ${opcao}.`)
}

console.log('Até o próximo!')