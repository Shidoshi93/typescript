import { question } from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../../config/teste.config.ts';

/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, 
que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
- Mostre na tela todas as cores adicionadas. 
- Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

export type cores = {
    cores: Array<string>,
    coresOrdenadas: Array<string>
}

export const ordenarCores = (cores: Array<string>): Array<string> => {
    return [...cores].sort();
}

export const processarCores = (cores: Array<string>): cores => {
    return {
        cores: cores,
        coresOrdenadas: ordenarCores(cores)
    }
}

const rodarInterativamente = (): void => {
    const entradas: Array<string> = new Array<string>();
    let contador: number = 0;

    do {
        const cor: string = question("Digite a cor: ");

        entradas.push(cor);
        contador++;
    } while (contador <= 4);

    console.log("---Cores---\n");
    entradas.map((item) => console.log(item));

    console.log("---Cores Ordenadas---\n");
    entradas.sort().map((item) => console.log(item));

    processarCores(entradas);
}

naoExucutaReadLineSeEhTeste(rodarInterativamente);