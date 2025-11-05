import { keyInYNStrict, questionInt } from 'readline-sync'

/*
Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja 
encontrado na Collection Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não 
seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let parar: boolean = false;

do {
    const numero: number = questionInt("Digite o número: ");
    numeros.has(numero) ? 
        console.log(`O Número ${numero} foi encontrado!`) :
        console.log(`O número ${numero} não foi encontrado!`);

    parar = keyInYNStrict("Deseja procurar outro número?");
} while (parar);