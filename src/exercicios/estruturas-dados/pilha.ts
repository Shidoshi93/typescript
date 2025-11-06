import { question, questionInt } from 'readline-sync'
import { Stack } from '../utils/Stack.ts';
import { naoExucutaReadLineSeEhTeste } from '../../config/teste.config.ts';

/* 
Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. 
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
*/

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

// passar um objeto como parâmentro
export const manipulaPilha = (opcao: number, nomeLivro: string, pilha: Stack<string>): Stack<string> => {
    switch (opcao) {
        case opcoesMenu.ADICIONAR_LIVRO:
            pilha.push(nomeLivro);
            console.log(`\nLivro ${nomeLivro} adicionado!\n`);
            break;

        case opcoesMenu.LISTAR_LIVROS:
            console.log("\nLivros na pilha: \n")
            pilha.printStack();
            break;

        case opcoesMenu.REMOVER_LIVROS:
            if (pilha.pop() !== undefined) console.log(`O livro ${nomeLivro} foi retirado da pilha.`);
            break;

        case opcoesMenu.SAIR:
            console.log("Saindo do sistema...");
            setTimeout(() => {
                console.log("Sistema encerrado.");
            }, 3000);

        default:
            opcao !== 0 ? console.log("Opção inválida") : null;
    }

    return pilha;
}

const menu = (): void => {
    const pilhaLivros: Stack<string> = new Stack<string>();
    let opcao: number | undefined = undefined;
    let nomeLivro: string = "";

    do {
        console.log("****************************************************");
        console.log("\nQual operação deseja realizar (Digite 1, 2, 3 ou 0): \n");
        mensagesMenu.map((item) => console.log(item))
        console.log("\n****************************************************");

        opcao = questionInt("Entre com a opção desejada: ",
            {
                limit: /^\d+$/, // validando se o input foi numérico
                limitMessage: "Digite um número, por favor."
            }
        );

        if (opcao === opcoesMenu.ADICIONAR_LIVRO) { 
                    nomeLivro = question("Informe o nome do cliente: ");
                }

        manipulaPilha(opcao,nomeLivro, pilhaLivros);

    } while (opcao !== opcoesMenu.SAIR);
}

naoExucutaReadLineSeEhTeste(menu);