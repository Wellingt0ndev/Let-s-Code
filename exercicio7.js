/*
Crie uma função que recebe o valor do raio de um círculo como parâmetro e retorna o valor da área desse círculo. Lembrando que a área de círculo é dada pela equação: A = 𝛑 x r².
*/

const read = require('readline-sync')
let raio = Number(read.question('Qual é tamanho do raio: '))
console.log(`A área do círculo com raio de ${raio} é ${areaCirculo(raio)}`)

function areaCirculo(raio){
let area = Math.PI * Math.pow(raio, 2)
return area.toFixed(2)
}
