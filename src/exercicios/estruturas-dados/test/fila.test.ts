import { Queue } from "../../utils/Queue.ts";
import { manipulaFila } from "../fila.ts";

const CLIENTE_BASE: string = "Daniel";
const CLIENTE_1: string = `${CLIENTE_BASE}_1`;

const createInitialQueue = (): Queue<string> => {
    const fila = new Queue<string>();
    fila.enqueue(CLIENTE_1);
    fila.enqueue(CLIENTE_BASE);
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
        filaEsperada.enqueue(CLIENTE_BASE);

        const filaResultado = manipulaFila(1, CLIENTE_BASE, filaInicial);

        expect(consoleLogSpy).toHaveBeenCalledWith(`\nCliente ${CLIENTE_BASE} adicionado!\n`);
        expect(filaResultado).toEqual(filaEsperada); 
    });

    test('Deve listar os elementos de uma fila (Opção 2)', () => {
        const filaInicial = createInitialQueue();
        const filaEsperada = createInitialQueue(); 
        const filaResultado = manipulaFila(2, "", filaInicial);

        expect(filaResultado).toEqual(filaEsperada); 
        expect(consoleLogSpy).toHaveBeenCalledWith("\nClientes na fila: \n");
        expect(consoleLogSpy).toHaveBeenCalledWith(CLIENTE_1);
        expect(consoleLogSpy).toHaveBeenCalledWith(CLIENTE_BASE);
    });

    test('Deve remover o primeiro elemento da fila (Opção 3)', () => {
        const filaInicial = createInitialQueue();
        const filaEsperada = new Queue<string>();
        filaEsperada.enqueue(CLIENTE_BASE);
        
        const filaResultado = manipulaFila(3, CLIENTE_1, filaInicial); 

        expect(consoleLogSpy).toHaveBeenCalledWith(`Cliente ${CLIENTE_1} foi chamado.\n`);
        expect(filaResultado).toEqual(filaEsperada);
    });
});