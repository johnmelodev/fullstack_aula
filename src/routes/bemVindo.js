import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API rodando com sucesso mesmo, pode cre" });
});

export default app;
