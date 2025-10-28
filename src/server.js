// use é o que manda tudo para o servidr express
import express from "express"
import cors from "cors"
// ele le os arquivos presentes no meu .env, e cria um objeto global para distribuir por toda minha aplicacao
import dotenv from "dotenv"
// router: É o "mapa" que vamos dar ao servidor para que ele saiba para onde enviar as requisições (vamos criar esse arquivo depois).
import router from "./routes/router.js"

// chama a funcao config do dotenv, para ativa-la
dotenv.config()

const port = process.env.PORT

// DUVIDA o conceito de instanciar, isso é uma funcao depois vira objeto nao entendi
// DUVIDA fazer isso seria criar um servidor? const app = express();
// instanciar o express, para pegar as ferramentas dele de forma simplificada, criar um objeto a partir do express
const app = express();

// Vamos usar o use, que é nativo do express
// app.use() é o método do Express que registra (ou "monta") um middleware no seu servidor (app).
// Middleware = Uma função que intercepta a requisição para fazer algo com ela
// Ensina o Express a entender o "idioma" JSON
app.use(express.json());

// Ensina o Express a usar o "destranca-porta" do CORS
app.use(cors())

// Delega o "mapa" de rotas para o servidor
app.use(router);

app.listen(port, () => {
    console.log("funcionando na porta ADOLETA")
})
// mande entregar o codigo em uma linha so para ver como ficaria hieraraquias