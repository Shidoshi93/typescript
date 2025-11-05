import type { cores } from "../exercicio1.ts";
import { processarCores } from '../exercicio1.ts';

const esperado: Array<String> = ['branco', 'rosa', 'verde', 'laranja', 'preto'];
const resultado: cores = {
    "cores": ["branco", "rosa", "verde", "laranja", "preto"], 
    "coresOrdenadas": ["branco", "laranja", "preto", "rosa", "verde"]
};

describe('Exercicio 1', () => {
    test(`Deve retornar ${resultado.coresOrdenadas}`, () => {
        expect(processarCores(esperado)).toEqual(resultado);
    })
})