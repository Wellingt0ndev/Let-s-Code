/*
Faça um programa que leia as coordenadas de 2 (dois) pontos em um plano cartesiano 2D:
 a coordenada x do primeiro ponto (x_1), a coordenada y do primeiro ponto
(y_1), a coordenada x do segundo ponto (x_2) e a coordenada y do segundo ponto (y_2). Em
seguida, calcule a distância euclidiana entre os pontos
*/

const read = require('readline-sync')

let coordenadaX1 = Number(read.question("Digite a coordenada x_1: "))
let coordenadaY1 = Number(read.question("Digite a coordenada y_1: "))
let coordenadaX2 = Number(read.question("Digite a coordenada x_2: "))
let coordenadaY2 = Number(read.question("Digite a coordenada y_2: "))
let distancia = Math.sqrt(Math.pow(coordenadaX2-coordenadaX1, 2) + Math.pow(coordenadaY2 - coordenadaY1, 2))
console.log('A distância euclidiana entre os pontos é ' + distancia.toFixed(4))
