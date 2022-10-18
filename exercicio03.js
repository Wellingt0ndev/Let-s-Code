/*
Crie um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual
dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. 
Caso o valor não esteja em nenhum destes intervalos, deverá ser impressa a mensagem
 “Fora de intervalo”.
 */

const read = require('readline-sync')
let num = Number(read.question("Digite um valor: "))
if(num >= 0 && num <= 25){
    console.log('O número está entre os intervalos[0,25]')
}else if(num > 25 && num <= 50){
    console.log('O número está entre os intervalos(25,50]')
}else if(num > 50 && num <= 75){
    console.log('O número está entre os intervalos(50,75]')
} else if(num > 75 && num <= 100){
        console.log('O número está entre os intervalos(75,100]')
} else {
    console.log("Fora de intervalo")
}