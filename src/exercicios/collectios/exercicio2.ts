import { questionInt, keyInYNStrict } from "readline-sync";
import { naoExucutaReadLineSeEhTeste } from "../../config/teste.config.ts";

/*
Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. 
O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no 
Array, exiba na tela a posição deste número na Collection. 
Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!
*/

export const procuraNumeroNoSet = (numero: number, numeros: Array<number>) => {
    let mensagem: String = "";

    mensagem = numeros.includes(numero) ?
        `Índice do número ${numero} é ${numeros.indexOf(numero)}` :
        `O número ${numero} não foi encontrado`;

        return mensagem;
}

const rodarInterativamente = () => {
    const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

    let parar: boolean = false;
    do {
        const numero: number = questionInt("Digite um número: ");

        procuraNumeroNoSet(numero, numeros);

        parar = keyInYNStrict("Deseja procurar outro número? ");
    } while (parar);
}

naoExucutaReadLineSeEhTeste(rodarInterativamente)