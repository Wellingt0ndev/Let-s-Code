/*
Faça um programa que dados dois arrays de mesmo tamanho, imprima o produto escalar entre
eles.
*/
const read = require("readline-sync");
let array1 = [];
let array2 = [];
let soma = 0;

for (let i = 0; i < 3; i++) {
  array1.push(
    Number(read.question(`Digite um número do índice [${i}] da array 1 `))
  );
}
for (let j = 0; j < 3; j++) {
  array2.push(
    Number(read.question(`Digite um número do índice [${j}] da array 2 `))
  );
}

for (let i = 0; i < array1.length; i++) {
  let res = array1[i] * array2[i];
  soma += res;
}
console.log(soma);
