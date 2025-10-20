import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/router.js";
dotenv.config();

const port = process.env.PORT;

const app = express();

// Middlewares

app.use(express.json());
app.use(cors());
//================

app.use(router);

// Iniciar o servidor
app.listen(port, () => console.log(`funcionando na porta adoleta: ${port}`));
