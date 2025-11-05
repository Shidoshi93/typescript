import { question } from 'readline-sync';
import { naoExucutaReadLineSeEhTeste } from '../../config/teste.config.ts';

/*
Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, 
que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
- Mostre na tela todas as cores adicionadas. 
- Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

export type cores = {
    cores: Array<String>,
    coresOrdenadas: Array<String>
}

export const ordenarCores = (cores: Array<String>): Array<String> => {
    return [...cores].sort();
}

export const processarCores = (cores: Array<String>): cores => {
    return {
        cores: cores,
        coresOrdenadas: ordenarCores(cores)
    }
}

const rodarInterativamente = (): void => {
    const entradas: Array<String> = new Array<String>();
    let contador: number = 0;

    do {
        const cor: String = question("Digite a cor: ");

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