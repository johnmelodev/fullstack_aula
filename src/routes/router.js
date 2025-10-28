// O único trabalho deste arquivo é ser o "Maître". Ele não faz nenhum trabalho real, apenas "agrupa" todos os seus "garçons" (os arquivos de rota) e entrega esse grupo ao server.js (o Gerente).
import express from "express";
import bemVindo from "./bemVindo.js";

// 2. Instancia o Express para *este arquivo*
// NOTA: Cada 'app = express()' é uma instância.
// No server.js, ele é o "Servidor".
// Aqui, ele é um "Roteador" (Maître), feito para agrupar outras rotas.
const app = express();

// 3. Registra o "Garçom" (a rota) no "Maître" (este roteador)
// app.use() é a função que "pluga" o middleware/rota.
app.use(bemVindo);

// 4. Exporta o Maître (o roteador já configurado) para o server.js
export default app;