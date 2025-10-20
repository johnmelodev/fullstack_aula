import express from "express";
import bemvindo from "./bemVindo.js";
import funcionarioRoute from "./funcionarioRouter.js";

const app = express();

app.use(bemvindo, funcionarioRoute);

export default app;
