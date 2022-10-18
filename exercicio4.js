/*
Crie o jogo “Pedra, Papel, Tesoura” por meio de um código em JavaScript.
Para isso, solicite que o primeiro jogador informe a sua escolha e depois o
mesmo para o segundo jogador. Por fim, utilize os if’s para saber quem
seria o vencedor.
*/

const read = require('readline-sync')

let jogador1 = read.question("Escolha uma opção[pedra, papel, tesoura]:  ")
let jogador2 = read.question("Escolha outra opção[pedra, papel, tesoura]:  ")
if( jogador1 === jogador2){
    console.log("Empate")
} else if(jogador1 === 'pedra' && jogador2 === 'papel'){
    console.log("Papel ganha de pedra, jogador2 venceu ")
} else if(jogador1 === 'papel' && jogador2 === 'pedra'){
    console.log("Papel ganha de pedra, jogador1 venceu ")
}else if(jogador1 === 'papel' && jogador2 === 'tesoura'){
    console.log("Tesoura ganha de papel, jogador2 venceu")
}else if(jogador1 === 'tesoura' && jogador2 === 'papel'){
    console.log("Tesoura ganha de papel, jogador1 venceu")
}else if(jogador1 === 'tesoura' && jogador2 === 'pedra'){
    console.log("Pedra ganha de tesoura, jogador2 venceu")
}else if(jogador1 === 'pedra' && jogador2 === "tesoura" ){
    console.log("Pedra ganha de tesoura, Jogador1 venceu")
}else{
    console.log("Resposta inválida")
}