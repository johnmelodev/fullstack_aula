// Apenas para fins de estudo da hierarquia:
import router from "./routes/router.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// O objeto 'app' é criado e seus métodos são chamados em cadeia
express()
    .use(cors())
    .use(express.json())
    .use(router)
    .listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}`));
