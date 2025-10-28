import prisma from "../SingletonPrismaCliente/prisma_connect.js"


export class FuncionarioRepository {
    async getAllFuncionarios() {
        try {
            const getAll = await prisma.funcionario.findMany()
            return {
                status: 200,
                payload: getAll,
            }
        } catch (error) {
            return {
                status: 400,
                payload: error
            }
        } finally {
            this.disconnect()
        }
    }

    async disconnect() {
        await prisma.$disconnect()
    }


}