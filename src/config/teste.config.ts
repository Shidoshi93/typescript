export const naoExucutaReadLineSeEhTeste = (execucao: () => void): void => {
    const isJest = typeof process.env.JEST_WORKER_ID !== 'undefined' || process.env.NODE_ENV === 'test';

    if (!isJest) {
        execucao();
    }
}