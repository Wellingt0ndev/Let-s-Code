/*
Faça um programa que fique pedindo uma resposta do usuário, entre 1, 2 e 3. Se o usuário digitar 1, o programa deve cadastrar um novo usuário, solicitando nome, idade, e-mail e CPF, guardando esse cadastro em um objeto, e cada objeto devo ser adicionado em um array. Quando o usuário digitar 2, o programa deve imprimir os usuários cadastrados; e se o usuário digitar 3, o programa deve encerrar.
*/

const read = require('readline-sync')
let array = []
let resposta = 0
console.log('--------MENU--------')
    console.log('1 - Cadastro')
    console.log('2 - Exibir dados')
    console.log('3 - Sair')
while(resposta !== 3){    
    resposta = Number(read.question("Digite o número da opção desejada: "))
    if(resposta === 1){
        
        
    } else if(resposta === 2){
        console.log(array)
    }else if(resposta === 3){
        break
    }else{
        console.log('Número inválido')
    }
  
    
}



