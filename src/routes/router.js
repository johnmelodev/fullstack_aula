import express from "express";
import bemvindo from "./bemVindo.js";
import funcionarioRouter from "./funcionarioRouter.js"

const app = express();


app.use(bemvindo, funcionarioRouter);

export default app;
