function getInteiroAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = getInteiroAleatorio(-1, 10);
    console.log(`opção escolhida foi ${opcao}.`)
} while(opcao != -1)
console.log('Até  próxima!');