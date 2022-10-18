/*
Vamos fazer um programa para verificar quem é o assassino de um
crime. Para descobrir o assassino, a polícia faz um pequeno questionário
com 5 perguntas onde a resposta só pode ser sim ou não:
1. Mora perto da vítima?
2. Já trabalhou com a vítima?
3. Telefonou para a vítima?
4. Esteve no local do crime?
5. Devia para a vítima?
Cada resposta “sim” dá um ponto para o suspeito. A polícia considera que os suspeitos com 5
pontos são os assassinos, com 4 a 3 pontos são cúmplices e 2 pontos são apenas suspeitos,
necessitando de outras investigações. Valores abaixo de 2 são liberados.
No seu programa, você deve fazer essas perguntas e, de acordo com as respostas do usuário,
informar como a polícia o considera.
*/

const read = require("readline-sync");
let respostas = [];
let contSim = 0;
let investigado = "";

respostas.push(read.question("Mora perto da vítima?[sim/não]: "));
respostas.push(read.question("Já trabalhou com a vítima?[sim/não]: "));
respostas.push(read.question("Telefonou para a vítima?[sim/não]: "));
respostas.push(read.question("Esteve no local do crime?[sim/não]: "));
respostas.push(read.question("Devia para a vítima?[sim/não]: "));

for (let i = 0; i < respostas.length; i++) {
  if (respostas[i] === "sim") {
    contSim++;
  }
}
switch (contSim) {
  case 1:
    investigado = "Liberado";
    break;
  case 2:
    investigado = "Suspeito";
    break;
  case 3:
    investigado = "Cúmplice";
    break;
  case 4:
    investigado = "Cúmplice";
    break;
  case 5:
    investigado = "Assassino";
    break;
}
console.log("A polícia considera: " + investigado);
