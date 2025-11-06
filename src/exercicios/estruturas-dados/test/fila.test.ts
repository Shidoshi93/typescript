import { Queue } from "../../utils/Queue.ts";
import { manipulaFila } from "../fila.ts";

const NOME_CLIENTE_1: string = "Alan Turing";
const NOME_CLIENTE_2: string = "Isaac Asimov";

const createInitialQueue = (): Queue<string> => {
    const fila = new Queue<string>();
    fila.enqueue(NOME_CLIENTE_2);
    fila.enqueue(NOME_CLIENTE_1);
    return fila;
};

describe('Testa manipulaFila', () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    test('Deve adicionar um cliente na fila (Opção 1)', () => {
        const filaInicial = new Queue<string>();
        const filaEsperada = new Queue<string>();
        filaEsperada.enqueue(NOME_CLIENTE_1);

        const filaResultado = manipulaFila(1, NOME_CLIENTE_1, filaInicial);

        expect(consoleLogSpy).toHaveBeenCalledWith(`\nCliente ${NOME_CLIENTE_1} adicionado!\n`);
        expect(filaResultado).toEqual(filaEsperada); 
    });

    test('Deve listar os elementos de uma fila (Opção 2)', () => {
        const filaInicial = createInitialQueue();
        const filaEsperada = createInitialQueue(); 
        const filaResultado = manipulaFila(2, "", filaInicial);

        expect(filaResultado).toEqual(filaEsperada); 
        expect(consoleLogSpy).toHaveBeenCalledWith("\nClientes na fila: \n");
        expect(consoleLogSpy).toHaveBeenCalledWith(NOME_CLIENTE_2);
        expect(consoleLogSpy).toHaveBeenCalledWith(NOME_CLIENTE_1);
    });

    test('Deve remover o primeiro elemento da fila (Opção 3)', () => {
        const filaInicial = createInitialQueue();
        const filaEsperada = new Queue<string>();
        filaEsperada.enqueue(NOME_CLIENTE_1);
        
        const filaResultado = manipulaFila(3, NOME_CLIENTE_2, filaInicial); 

        expect(consoleLogSpy).toHaveBeenCalledWith(`Cliente ${NOME_CLIENTE_2} foi chamado.\n`);
        expect(filaResultado).toEqual(filaEsperada);
    });
});