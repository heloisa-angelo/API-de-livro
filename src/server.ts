import express from "express"
import helmet from "helmet"
import path from  "path"
import router from "./routes/livro"


const server = express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname, "../public")))
server.use("/livros", router)

server.get("/", (req, res) => {
    res.json({mensagem: "API de Livros rodando! "})
})

server.listen(3000, () => {
    console.log("Servidpr rodando em http://localhost:3000/")
})