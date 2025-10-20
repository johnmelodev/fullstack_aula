import express from "express";
import { FuncionarioController } from "../controller/funcionarioController.js";

const app = express();
const controller = new FuncionarioController();

app.get("/funcionario", controller.getAllFuncionarios);

export default app;
