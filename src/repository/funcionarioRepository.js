// 1. Importa a "Ferramenta" (O Singleton)
// O "Estoquista" (Repository) vai até a "Garagem" (Singleton)
// e pega a *única* instância (o "bolo") do Prisma que existe.
import prisma from "../SingletonPrismaClient/prisma_connect.js";

// 2. Cria o "Molde" do Estoquista (A Classe)
// Usamos 'export class' para criar o molde que o "Chef" (Controller)
// irá usar para "instanciar" (contratar) seu próprio Estoquista.
export class funcionarioRepository {

    // 3. Define a "Tarefa" (O Método)
    // Este é o "trabalho" do Estoquista: buscar TODOS os funcionários.
    // Precisa ser 'async' porque ele vai "esperar" (await) o banco responder.
    async getAllFuncionarios() {

        // 4. O "Mecanismo de Segurança"
        // Como o professor disse, TUDO que fala com o banco vai dentro
        // de um try/catch, para o "raio no Japão" (um erro) não derrubar o servidor.
        try {

            // 5. O "Caminho Feliz" (try)
            //    Aqui fica a "bomba" (a operação de risco).
            //    'await' pausa a função aqui até o banco devolver os dados.
            const created = await prisma.funcionario.findMany();

            // 6. O "Relatório de Sucesso"
            //    O Estoquista devolve um "relatório" completo para o "Chef" (Controller).
            return {
                statusCode: 200, // Status: "Chef, deu tudo certo (200 OK)"
                send: created,     // Dados: "Chef, aqui estão os 'ingredientes' (os funcionários)"
                // CORREÇÃO: Removemos o "+ a". Aquilo era só um
                // exemplo de lógica do 'await' na Aula 6 e não
                // pertence a este código real.
            };

        } catch (error) {

            // 7. O "Caminho Triste" (catch)
            //    Se a "bomba" (await) explodir, o código pula para cá.
            return {
                statusCode: 400, // Status: "Chef, deu ruim (400 Bad Request)"
                send: error,       // Dados: "Chef, aqui está o motivo do erro"
            };

        } finally {

            // 8. O "Faxineiro" (finally)
            //    Este bloco roda *sempre* (dando certo ou errado).
            //    É o "faxineiro" que "desliga a luz" (desconecta)
            //    para "não gastar a fatura" (economizar recursos do servidor).

            // CORREÇÃO: O método de desconectar é "delicado" e
            // precisa do cifrão ($), como o professor explicou.
            await prisma.$disconnect();
        }
    } // Fim do método getAllFuncionarios

} // Fim da classe funcionarioRepository