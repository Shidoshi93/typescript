export const naoExucutaReadLineSeEhTeste = (execucao: () => void): void => {
    // Detect running under Jest in a robust way:
    // - Jest sets the JEST_WORKER_ID environment variable for worker processes.
    // - Many setups set NODE_ENV=test when running tests.
    // Relying on process.argv[1] is fragile because jest may spawn workers
    // where argv[1] is the test file path (which doesn't include "jest").
    const isJest = typeof process.env.JEST_WORKER_ID !== 'undefined' || process.env.NODE_ENV === 'test';

    if (!isJest) {
        execucao();
    }
}