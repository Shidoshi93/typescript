import { questionInt, question } from 'readline-sync'
import { Queue } from '../utils/Queue.ts';
import { naoExucutaReadLineSeEhTeste } from '../../config/teste.config.ts';

const opcoesMenu = {
    'ADICIONAR_CLIENTE': 1,
    'LISTAR_CLIENTES': 2,
    'REMOVER_CLIENTE': 3,
    'SAIR': 0
}
const mensagesMenu = [
    'Adicionar um novo cliente na fila',
    'Listar todos os clientes',
    'Retirar cliente da fila',
    'Sair'
]

// passar um objeto como parâmentro
export const manipulaFila = (opcao: number, nomeCliente: string, fila: Queue<string>): Queue<string> => {

    switch (opcao) {
        case opcoesMenu.ADICIONAR_CLIENTE:
            fila.enqueue(nomeCliente);
            console.log(`\nCliente ${nomeCliente} adicionado!\n`);
            break;

        case opcoesMenu.LISTAR_CLIENTES:
            console.log("\nClientes na fila: \n")
            fila.printQueue();
            break;

        case opcoesMenu.REMOVER_CLIENTE:
            if (fila.dequeue() !== undefined) console.log(`Cliente ${nomeCliente} foi chamado.\n`);
            break;

        case opcoesMenu.SAIR:
            console.log("Saindo do sistema...");
            setTimeout(() => {
                console.log("Sistema encerrado.");
            }, 3000);

        default:
            opcao !== 0 ? console.log("Opção inválida") : null;
    }

    return fila;
}

const menu = (): void => {
    const filaBanco: Queue<string> = new Queue<string>();
    let opcao: number;
    let nomeCliente: string = "";

    do {
        console.log("****************************************************");
        console.log("\nQual operação deseja realizar (Digite 1, 2, 3 ou 0): \n");
        mensagesMenu.map((item, index) => {
            index !== 3 ?
                console.log(`${index + 1} - ${item}`) :
                console.log(`0 - ${item}`);
        })
        console.log("\n****************************************************");

        opcao = questionInt("Entre com a opção desejada: ",
            {
                limit: /^\d+$/, // validando se o input foi numérico
                limitMessage: "Digite um número, por favor."
            }
        );

        if (opcao === opcoesMenu.ADICIONAR_CLIENTE) { 
            nomeCliente = question("Informe o nome do cliente: ");
        }

        manipulaFila(opcao, nomeCliente, filaBanco);

    } while (opcao !== opcoesMenu.SAIR);
}

naoExucutaReadLineSeEhTeste(menu);