/*
Faça um programa que peça a temperatura em graus Fahrenheit (°F),
transforme e mostre a temperatura em graus Celsius (°C).
*/
const read = require('readline-sync')

let tempFahrenheit = Number(read.question("Qual a temperatura em Fahrenheit "))
let tempCelsius = (5*(tempFahrenheit - 32)) / 9
console.log(`A temperatura ${tempFahrenheit}º Fahrenheit é igual a ${tempCelsius}º Celsius`)
