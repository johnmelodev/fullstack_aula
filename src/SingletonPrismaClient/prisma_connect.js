// usamos as chaves {} quando vamos fazer importacao de uma ferramenta só do prisma, e nao o prisma todo EXPORTACAO NOMEADA
// quando sao arquivos meus, eu devo usar o .js, quando é para pegar nativo do node modules nao precisa
import { PrismaClient } from "@prisma/client";

// Cria e exporta uma única instância global do Prisma
// Porque isso é uma instancia global, como saber a hierarquia das coisas com tantas pastas
const prisma = new PrismaClient

export default prisma;

// Exporta a instância única do Prisma (Padrão Singleton).
// As requisições ao banco NÃO são feitas neste arquivo; este arquivo
// apenas CRIA e FORNECE a instância.
// 
// Os Repositórios irão importar esta instância única para executar
// as requisições, garantindo uma única conexão e evitando
// o esgotamento de recursos do servidor (vazamento de memória/limite de conexões).