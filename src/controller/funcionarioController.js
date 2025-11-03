import express from "express"
import { funcionarioRepository } from "../repository/funcionarioRepository.js"

const repository = new funcionarioRepository

export class funcionarioController {

    async getAllFuncionarios(req, res) {

        const response = repository.getAllFuncionarios
            (res.json())
        try {
            res.status()

        } catch {

        } finally {

        }

    }
}