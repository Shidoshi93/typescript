import { questionInt } from 'readline-sync'

/*
Escreva um programa para criar uma Collection Set do tipo number. 
O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. 
*/

let numeros: Set<number> = new Set<number>();
let contador: number = 0;
do {
    const numero: number = questionInt("Digite um número: ");
    numeros.add(numero);
    contador++;
} while (contador < 10);

const numerosOrdenados: Array<number> = [...numeros].sort((a, b) => a -b); // poderia fazer com o Array.from() também.
console.log(numerosOrdenados);