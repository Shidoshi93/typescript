import readline from 'readline-sync'
import { Stack } from '../utils/Stack.ts';
import { naoExucutaReadLineSeEhTeste } from '../../config/teste.config.ts';

const opcoesMenu = {
    'ADICIONAR_LIVRO': 1,
    'LISTAR_LIVROS': 2,
    'REMOVER_LIVROS': 3,
    'SAIR': 0
}
const mensagesMenu = [
    '1 - Adicionar Livro na pilha',
    '2 - Listar todos os Livros',
    '3 - Retirar Livro da pilha',
    '0 - Sair'
]

const manipulaPilha = (opcao: number, pilha: Stack<string>): void => {
    let nomeLivro: string = "";

    switch (opcao) {
        case opcoesMenu.ADICIONAR_LIVRO:
            nomeLivro = readline.question("Informe o nome do livro: ");
            pilha.push(nomeLivro);
            console.log(`\nLivro ${nomeLivro} adicionado!\n`);
            break;

        case opcoesMenu.LISTAR_LIVROS:
            console.log("\nLivros na pilha: \n")
            pilha.printStack();
            break;

        case opcoesMenu.REMOVER_LIVROS:
            pilha.pop();
            console.log(`O livro ${nomeLivro} foi retirado da pilha.`);
            break;

        case opcoesMenu.SAIR:
            console.log("Saindo do sistema...");
            setTimeout(() => {
                console.log("Sistema encerrado.");
            }, 3000);

        default:
            opcao !== 0 ? console.log("Opção inválida") : null;
    }
}

const menu = (): void => {
    const pilhaLivros: Stack<string> = new Stack<string>();
    let opcao: number | undefined = undefined;

    do {
        console.log("****************************************************");
        console.log("\nQual operação deseja realizar (Digite 1, 2, 3 ou 0): \n");
        mensagesMenu.map((item) => console.log(item))
        console.log("\n****************************************************");

        opcao = readline.questionInt("Entre com a opção desejada: ",
            {
                limit: /^\d+$/, // validando se o input foi numérico
                limitMessage: "Digite um número, por favor."
            }
        );

        manipulaPilha(opcao, pilhaLivros);

    } while (opcao !== opcoesMenu.SAIR);
}

naoExucutaReadLineSeEhTeste(menu);