import express from "express"
import helmet from "helmet"
import path from  "path"

//instancia do express
const server = express()

server.use(helmet())
server.use(express.json())//habilita leitura do json
server.use(express.urlencoded({extended: true}))//suporte a formulario
//acesso a arquivos estáticos
server.use(express.static(path.join(__dirname, "../public")))

//rotas
server.get("/", (req, res) =>{
    let nome = "John"
    let idade = 90
    res.json({nome, idade})
})

//iniciar o servidor
server.listen(3000, () => {
    console.log("Servidpr rodando em http://localhost:3000/")
})