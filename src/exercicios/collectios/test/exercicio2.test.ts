import { procuraNumeroNoSet } from "../exercicio2.ts";

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

describe('Exercicio 2 -> procuraNumeroNoSet()', () => {
    test(`Deve retornar a mensagem de que o número foi encontrado, contendo o Índice`, () => {
        const esperado: string = "Índice do número 9 é 5"
        expect(procuraNumeroNoSet(9, numeros)).toEqual(esperado);
    })

    test(`Deve retornar a mensagem de que o número não foi encontrado`, () => {
        const esperado: string = "O número 30 não foi encontrado"
        expect(procuraNumeroNoSet(30, numeros)).toEqual(esperado);
    })
})
