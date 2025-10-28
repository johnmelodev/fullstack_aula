import express from "express";

// 1. Instancia o Express para *este arquivo*
// NOTA: Novamente, instanciamos.
// Aqui, o 'app' é um "Garçom", um Roteador específico
// cujo único trabalho é definir os endpoints (app.get).
const app = express();

// 2. Define o Endpoint (A Tarefa)
// app.get('/') "escuta" requisições GET na rota raiz (http://localhost:3000/)
app.get("/", (req, res) => {
    // 3. Define a Resposta
    // (req, res) => ... é a ação.
    // res.json() envia a resposta ao cliente.
    res.json({ message: "testando minha primeira porta" });
});

// 4. Exporta o "Garçom" (este roteador) para o router.js
export default app;