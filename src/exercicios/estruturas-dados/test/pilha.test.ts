import { Stack } from "../../utils/Stack.ts";
import { manipulaPilha } from "../pilha.ts";

const LIVRO_1: string = "Hyperium";
const LIVRO_2: string = "Boca de Siri";

const criaPilhaInicial = (): Stack<string> => {
    const pilha = new Stack<string>();
    pilha.push(LIVRO_1);
    pilha.push(LIVRO_2);
    return pilha;
};

describe('Testa manipulaPilha', () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('Deve adicionar um Livro na pilha (Opção 1)', () => {
        const pilhaInicial = new Stack<string>();
        const pilhaEsperada = new Stack<string>();
        pilhaEsperada.push(LIVRO_1);

        const pilhaResultado = manipulaPilha(1, LIVRO_1, pilhaInicial);

        expect(consoleLogSpy).toHaveBeenCalledWith(`\nLivro ${LIVRO_1} adicionado!\n`);
        expect(pilhaResultado).toEqual(pilhaEsperada); 
    });

    test('Deve listar os elementos de uma fila (Opção 2)', () => {
        const pilhaInicial = criaPilhaInicial();
        const pilhaEsperada = criaPilhaInicial();
        const pilhaResultado = manipulaPilha(2, "", pilhaInicial);

        expect(pilhaResultado).toEqual(pilhaEsperada); 
        expect(consoleLogSpy).toHaveBeenCalledWith("\nLivros na pilha: \n");
        expect(consoleLogSpy).toHaveBeenCalledWith(LIVRO_1);
        expect(consoleLogSpy).toHaveBeenCalledWith(LIVRO_2);
    });

    test('Deve remover o primeiro elemento da fila (Opção 3)', () => {
        const pilhaInicial = criaPilhaInicial();
        const pilhaEsperada = new Stack<string>();
        pilhaEsperada.push(LIVRO_1);
        
        const filaResultado = manipulaPilha(3, LIVRO_1, pilhaInicial); 

        expect(consoleLogSpy).toHaveBeenCalledWith(`O livro ${LIVRO_1} foi retirado da pilha.`);
        expect(filaResultado).toEqual(pilhaEsperada);
    });
});