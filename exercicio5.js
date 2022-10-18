/*
Faça um programa, usando loops, que peça para o usuário digitar vários
números, um após outro, e que só finaliza quando o usuário digitar 0. Ao
final imprima a soma de todos os números digitados.
*/

const read = require('readline-sync')

let soma = 0
let num
do{
    num = Number(read.question("Digite um número(0 finaliza): "))
    soma += num 
}while(num !== 0)
console.log(soma)


    
