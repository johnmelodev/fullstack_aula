import { FuncionarioRepository } from "../repository/funcionarioRepository.js"
export class FuncionarioController {

    async getAllFuncionarios(req, res) {

        const repository = new FuncionarioRepository()

        try {
            const all = await repository.getAllFuncionarios()
            return res.status(all.status).json(all.payload)
        } catch (error) {
            return res.status(500).json(all.payload)

        } finally {

            repository.disconnect()

        }
    }
}